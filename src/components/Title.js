import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Title(props) {
    return(
        <Text style={ styles.title }>{props.title}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        color: "#f9f9f9",
        fontFamily: "Marcellus_400Regular",
        fontSize: 30,
        textAlign: "center",
        letterSpacing: 3,
        marginBottom: 20
    }
});