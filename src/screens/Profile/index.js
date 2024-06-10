import React, { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Container from "../../components/Container";
import styles from "./styles";

import { imgPaths } from "../../data/Serviços/ImgPath";
import Services from "../../data/Serviços/Services.json";
import { useNavigation } from "@react-navigation/native";

import { _consultData, _removeItem, _retrieveAllData, _storeData } from "../../storage/AsyncStorage";

export default function Profile() {
    const navigation = useNavigation();

    const [favoriteData, setFavoriteData] = useState([]);

    useEffect(() => {
        const loadFavorites = async () => {
            const favorites = await _retrieveAllData() || [];
            setFavoriteData(favorites);

            console.log(favorites);
        };

        loadFavorites();
    }, []);

    const toggleFavorite = useCallback(async (id) => {
        const isFavorite = await _consultData(id.toString());

        let updatedFavorites;

        if (isFavorite) {
            await _removeItem(id.toString());

            updatedFavorites = favoriteData.filter(fav => fav.id !== id);
        } 
        else {
            await _storeData(id.toString(), { id: id });

            updatedFavorites = [...favoriteData, { id: id }];
        }

        setFavoriteData(updatedFavorites);
    }, [favoriteData]);

    const isFavorite = useCallback((id) => {
        return favoriteData.some(fav => fav.id === id);
    }, [favoriteData]);

    return (
        <Container>
            <View style={styles.usernameBox}>
                <Text style={styles.username}>Olá Usuário</Text>
                <Text style={styles.schedulesCount}>Você tem X Serviço(s) Agendado(s)</Text>
            </View>

            <View style={ styles.schedulesBtnBox }>
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
                    renderItem={({ item }) => {
                        const favorite = isFavorite(item.id);

                        return (
                            <TouchableOpacity>
                                <View style={styles.cardContainer}>
                                    <View style={styles.imgContainer}>
                                        <Image
                                            source={imgPaths[item.id]["url"]}
                                            style={styles.img}
                                        />
                                    </View>

                                    <View style={styles.details}>
                                        <View>
                                            <Text style={styles.serviceName}>
                                                {item.service}
                                            </Text>

                                            <Text style={styles.servicePrice}>
                                                R$ {item.price}
                                            </Text>
                                        </View>

                                        <TouchableOpacity
                                            style={styles.favoriteBtn}
                                            onPress={() => toggleFavorite(item.id)}
                                        >
                                            <MaterialCommunityIcons
                                                name={favorite ? "heart" : "heart-outline"}
                                                size={20}
                                                color="#900"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </Container>
    );
}
