import React, { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList, TouchableOpacity, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Container from "../../components/Container";
import { ServiceCard } from "./ServiceCard";
import styles from "./styles";

import Services from "../../data/Serviços/Services.json";
import { useNavigation } from "@react-navigation/native";

import { _consultData, _removeItem, _retrieveAllData, _storeData } from "../../storage/AsyncStorage";
import { useSchedulesDatabase } from "../../db/useSchedulesDatabase";
import { useLogin } from "../Login/LoginProvider";

export default function Profile() {
    const navigation = useNavigation();
    const { User } = useLogin();
    const schedulesDatabase = useSchedulesDatabase();

    const [favoriteData, setFavoriteData] = useState([]);
    const [userData, setUserData] = useState(null);
    const [countSchedules, setCountSchedules] = useState(""); 

    useEffect(() => {
        const loadFavorites = async () => {
            const favorites = await _retrieveAllData() || [];
            setFavoriteData(favorites);
        };

        const fetchUserData = async () => {
            if (User) {
                const data = await schedulesDatabase.getUser(User);
                setUserData(data);
            }
        };

        const fetchCountSchedules = async () => {
            const count = await schedulesDatabase.countSchedules(User);
            setCountSchedules(count.toString());
        };

        fetchCountSchedules();
        fetchUserData();
        loadFavorites();
    }, [User]);

    const toggleFavorite = useCallback(async (id) => {
        const isFavorite = await _consultData(id.toString());
        let updatedFavorites;

        if (isFavorite) {
            await _removeItem(id.toString());
            updatedFavorites = favoriteData.filter(fav => fav.id !== id);
        } else {
            await _storeData(id.toString(), { id });
            updatedFavorites = [...favoriteData, { id }];
        }

        setFavoriteData(updatedFavorites);
    }, [favoriteData]);

    const isFavorite = useCallback((id) => favoriteData.some(fav => fav.id === id), [favoriteData]);

    const renderServiceCard = useCallback(({ item }) => {
        const favorite = isFavorite(item.id);

        return (
            <ServiceCard
                id={item.id}
                service={item.service}
                price={item.price}
                hours={item.hours}
                duration={item.duration}
                onToggleFavorite={toggleFavorite}
                isFavorited={favorite}
                setCount={ setCountSchedules }
            />
        );
    }, [isFavorite, toggleFavorite]);

    return (
        <Container>
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />

            <View style={styles.usernameBox}>
                <Text style={styles.username}>Olá {userData?.usuario}</Text>
                <Text style={styles.schedulesCount}>Você tem { countSchedules } Serviço(s) Agendado(s)</Text>
            </View>

            <View style={styles.schedulesBtnBox}>
                <TouchableOpacity
                    style={styles.schedulesPageBtn}
                    onPress={() => navigation.navigate("Schedules")}
                    activeOpacity={0.9}
                >
                    <MaterialCommunityIcons name="content-cut" size={20} color="#D9D9D9" />
                    <Text style={styles.schedulesPageText}> Serviços Agendados</Text>
                </TouchableOpacity>

                <View style={styles.titleBox}>
                    <View>
                        <Text style={styles.title}>Serviços</Text>
                        <Text style={styles.subtitle}>Clique para Agendar</Text>
                    </View>
                </View>

                <FlatList
                    data={Services}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderServiceCard}
                />
            </View>
        </Container>
    );
}