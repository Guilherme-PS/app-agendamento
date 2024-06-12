import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

export default function FormItem({ label, placeholder, secureTextEntry, leftIcon, rightIcon, onPress, onChangeText, value, errorMessage}) {
    return(
        <Input
            label={ label }
            placeholder={ placeholder }
            placeholderTextColor={"#B5B5B5"}
            containerStyle={ styles.container }
            labelStyle={ styles.label }
            inputContainerStyle={{ borderBottomWidth: 0, marginBottom: 0 }}
            inputStyle={ styles.input }
            secureTextEntry={ secureTextEntry }
            leftIcon={ <Feather name={leftIcon} size={20} color={"#808080"}/> }
            rightIcon={ <Feather name={rightIcon} size={23} color={"#808080"} onPress={ onPress }/> }
            leftIconContainerStyle={ styles.iconContainer }
            rightIconContainerStyle={[styles.iconContainer, { paddingRight: 15 }]}
            onChangeText={ onChangeText }
            value={ value }
            errorMessage={errorMessage}
            errorStyle={ styles.textError }
        />
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 0
    },

    label: {
        color: "#D9D9D9",
        fontFamily: "Marcellus_400Regular",
        fontSize: 17,
        fontWeight: "400",
    },

    input: {
        backgroundColor: "#F9F9F9",
        color: "#000000",
        paddingHorizontal: 10,
        height: 45
    },

    iconContainer: {
        backgroundColor: "#F9F9F9",
        paddingHorizontal: 15,
        height: 45
    },

    textError: {
        fontFamily: "OpenSans_400Regular",
        letterSpacing: 3,
        margin: 0,
        marginBottom: 15
    }
});