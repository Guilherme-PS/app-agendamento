import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Btn from "../../components/Btn";
import styles from "./styles";

import Container from "../../components/Container";
import Brand from "../../components/Brand"; 

import { imgPaths } from "../../data/Serviços/ImgPath";
import AllServices from "../../data/Serviços/Services.json";

export default function Profile({navigation}) {
    return (
        <Container>
            <View style={ styles.usernameBox }>
                <Text style={ styles.username }>Olá Usuário</Text>
                <Text style={ styles.schedulesCount}>Você tem X Serviço(s) Agendado(s)</Text>
            </View>

            <View style={{ backgroundColor: "#E0E0E0", paddingHorizontal: 25, flex: 1 }}>
                <TouchableOpacity style={ styles.schedulesPageBtn } onPress={ () => navigation.navigate("Schedules") } activeOpacity={0.9}>
                    <MaterialCommunityIcons name="content-cut" size={20} color="#D9D9D9"/>
                    <Text style={ styles.schedulesPageText }> Serviços Agendados</Text>
                </TouchableOpacity>

                <View style={ styles.titleBox }>
                    <View>
                        <Text style={ styles.title }>Serviços</Text>
                        <Text style={ styles.subtitle }>Clique para Agendar</Text>
                    </View>
                </View>

                <FlatList
                    data={AllServices}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
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

                                        <TouchableOpacity style={ styles.favoriteBtn }>
                                            <MaterialCommunityIcons name="heart-outline" size={20} color="#900"/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </Container>
    );
}