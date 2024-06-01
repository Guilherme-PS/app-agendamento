import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default function Btn({ title, type, fontColor, onPress, icon}) {
    return(
        <Button
            title={ title }
            onPress={ onPress }
            type={ type }
            titleStyle={[styles.title, 
                type == "solid" ? { color: fontColor } : null, 
                type == "outline" ? { color: fontColor } : null 
            ]}
            buttonStyle={[
                type == "solid" ? { backgroundColor: "#D9BB84"} : null, 
                type == "outline" ? { borderColor: "#D9BB84" } : null 
            ]}
            iconPosition="left"
            icon={ icon }
        />
    );
}

const styles = StyleSheet.create({
    title: {
        color: "#191919",
        fontFamily: "Marcellus_400Regular",
        fontSize: 18,
    }
});