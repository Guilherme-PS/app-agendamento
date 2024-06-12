import React, { useState, memo } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { imgPaths } from "../../../data/Serviços/ImgPath";
import ServiceModal from "../ServiceModal/index";

export const ServiceCard = memo(({ id, service, price, hours, duration, onToggleFavorite, isFavorited }) => {
    const handlePress = () => {
        onToggleFavorite(id);
    };

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <TouchableOpacity onPress={ () => setModalVisible(true) }>
                <View style={styles.cardContainer}>
                    <View style={styles.imgContainer}>
                        <Image
                            source={imgPaths[id]["url"]}
                            style={styles.img}
                        />
                    </View>

                    <View style={styles.details}>
                        <View>
                            <Text style={styles.serviceName}>{service}</Text>

                            <Text style={styles.servicePrice}>R$ {price}</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.favoriteBtn}
                            onPress={handlePress}
                        >
                            <MaterialCommunityIcons
                                name={isFavorited ? "heart" : "heart-outline"}
                                size={20}
                                color="#900"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>

            <ServiceModal id={id} service={service} price={price} hours={hours} duration={duration} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </View>
    );
});

const styles = StyleSheet.create({
    cardContainer: {
        alignContent: "center",
        backgroundColor: "#D4D4D4",
        borderRadius: 5,
        marginHorizontal: 3,
        height: 225,
        width: 175,
    },

    imgContainer: {
        flex: 1,
        paddingHorizontal: 5,
        paddingTop: 5,
    },

    img: {
        borderRadius: 3,
        height: "100%",
        width: "100%",
    },

    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        marginVertical: 10
    },

    serviceName: {
        fontFamily: "Archivo_500Medium",
        fontSize: 17,
    },

    servicePrice: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 13,
        lineHeight: 13
    },

    favoriteBtn: {
        paddingHorizontal: 10,
    }
});