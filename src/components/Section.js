import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Section({ sectionTop, sectionBottom, children }) {
    return(
        <View style={ styles.container }>
            <View style={ styles.textBox }>
                <Text style={styles.sectionTop}>{sectionTop}</Text>
                <Text style={styles.sectionBottom}>{"\t\t\t\t\t"}{sectionBottom}</Text>
            </View>

            { children }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        marginTop: 25,
    },

    textBox: {
        paddingHorizontal: 25,
        marginBottom: 10
    },

    sectionTop: {
        color: "#F9F9F9",
        fontSize: 25,
        fontFamily: "Redressed_400Regular"
    },

    sectionBottom: {
        color: "#F9F9F9",
        fontSize: 35,
        fontFamily: "Marcellus_400Regular",
        lineHeight: 40
    }
});