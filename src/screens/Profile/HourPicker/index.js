import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function HourPicker({ hours, selectedHour, onSelectHour }) {
    const renderItem = ({ item }) => {
        const isSelected = selectedHour === item;
        return (
            <View style={styles.hoursContainer}>
                <TouchableOpacity
                    style={styles.hourBtn}
                    onPress={() => onSelectHour(item)}
                >
                    <Text style={styles.hours}>{item}</Text>
                    <Feather
                        name={isSelected ? "check-circle" : "circle"}
                        size={20}
                        color={"#909090"}
                    />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <FlatList
            data={hours}
            contentContainerStyle={styles.listContainer}
            renderItem={renderItem}
            keyExtractor={ (item) => item }
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flexGrow: 1,
        justifyContent: "center",
        gap: 15,
    },
    
    hourBtn: {
        paddingVertical: 3,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    hoursContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#B9B9B9",
        paddingVertical: 7,
    },

    hours: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 15,
    },
});
