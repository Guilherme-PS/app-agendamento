import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useLogin } from "../Login/LoginProvider";

import Container from "../../components/Container";

export default function User() {
    const { handleLogin } = useLogin();

    return(
        <Container>
            <View style={styles.confirmBox}>
                <Image
                    source={require("../../../assets/images/Exit.png")}
                    style={styles.correctImg}
                />
                <Text style={ styles.confirmText }>Deseja Voltar para o Portfólio?</Text>

                <TouchableOpacity style={ styles.returnHomeBtn } onPress={ () => handleLogin(false) }>
                    <Text style={ styles.returnHomeBtnText}>Ir para Portfólio</Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    confirmBox: {
        flex: 1,
        backgroundColor: "#272727",
        alignItems: "center",
        justifyContent: "center",
        padding: 25
    },

    confirmText: {
        fontFamily: "Archivo_500Medium",
        fontSize: 25,
        color: "#f9f9f9",
        marginTop: 10,
        marginBottom: 20,
        textAlign: "center"
    },

    correctImg: {
        height: 150,
        width: 150,
    },

    returnHomeBtn: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        backgroundColor: "#D9BB84",
        width: "100%",
        borderRadius: 5
    },

    returnHomeBtnText: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 17,
        textAlign: "center"
    }
});