import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

export default function BottomTabButton(props) {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;

    const viewRef = useRef(null);
    const textViewRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 }});
            
            textViewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
        } else {
            viewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
            textViewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
        }
    }, [focused]);

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={[styles.container, { flex: focused ? 1 : 0.45 }]}
        >
            <View>
                <Animatable.View ref={viewRef} style={[StyleSheet.absoluteFillObject, { backgroundColor: "#D9BB84", borderRadius: 8 }]}/>

                <View style={[styles.btn , { backgroundColor: focused ? null : "#CECECE" }]}>
                    <Feather name={ item.icon } size={ focused ? 25 : 20 } color={ focused ? "#191919" : "#959595" }/>

                    <Animatable.View ref={ textViewRef }>
                        {focused && (
                            <Text style={ styles.screenName }>{item.label}</Text>
                        )}
                    </Animatable.View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",

    },
    btn: {
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        padding: 8
    },

    screenName: {
        color: "#191919", 
        fontFamily: "OpenSans_400Regular",
        paddingHorizontal: 5 
    }
});
