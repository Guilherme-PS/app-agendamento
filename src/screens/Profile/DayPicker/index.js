import React, { useMemo } from "react";
import { Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const getDays = () => {
    const days = [];
    const now = new Date();
    for (let i = 0; i < 7; i++) {
        const dayOfWeek = now.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            days.push({
                WeekDay: dayOfWeek,
                Day: now.getDate().toString().padStart(2, "0"),
            });
        }
        now.setDate(now.getDate() + 1);
    }
    return days.slice(0, 5);
};

const weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex"];

export default function DayPicker({ selectedDay, onSelectDay }) {
    const days = useMemo(getDays, []);

    const renderItem = ({ item }) => {
        const isSelected = selectedDay?.Day === item.Day;
        return (
            <TouchableOpacity
                style={[
                    styles.dateContainer,
                    { backgroundColor: isSelected ? "#3C3C3A" : "transparent" },
                ]}
                onPress={() => onSelectDay(item)}
            >
                <Text
                    style={[
                        styles.date,
                        { color: isSelected ? "#F9F9F9" : "#3C3C3A" },
                    ]}
                >
                    {weekDays[item.WeekDay - 1]}
                    {"\n"}
                    {item.Day}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={days}
            horizontal
            contentContainerStyle={styles.listContainer}
            renderItem={renderItem}
            keyExtractor={(item) => item.Day}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flexGrow: 1,
        justifyContent: "center",
        gap: 15,
    },
    dateContainer: {
        borderRadius: 5,
        width: 55,
    },
    date: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#B9B9B9",
        textAlign: "center",
        fontFamily: "Montserrat_400Regular",
        fontSize: 15,
        lineHeight: 20,
        paddingVertical: 15,
    },
});
