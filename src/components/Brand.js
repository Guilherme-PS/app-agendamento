import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Brand() {
    return(
        <View style={ styles.container }>
            <Image style={ styles.image } source={ require("../../assets/images/brand.png") } resizeMode="center"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginBottom: 5
    },

    image: {
        height: 75,
        width: 75
    }
});