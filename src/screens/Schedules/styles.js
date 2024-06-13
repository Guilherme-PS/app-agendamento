import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    noScheduleTitle: {
        color: "#f9f9f9",
        fontFamily: "Montserrat_400Regular",
        fontSize: 20,
        textAlign: "center"
    },

    listContainer: {
        justifyContent: "center",
        alignContent: "center",
        paddingHorizontal: 25,
    },
    
    schedulesContainer: {
        backgroundColor: "#A9A9A9",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 5,
        borderRadius: 5
    },

    dateContainer: {
        backgroundColor: "#A0A0A0",
        paddingHorizontal: 15,
        paddingVertical: 15,
    },

    date: {
        textAlign: "center",
        fontSize: 17,
    },

    hour: {
        fontSize: 15,
        textAlign: "center"
    },

    titleContainer: {
        marginLeft: 15,
    },

    title: {
        color: "#191919",
        fontFamily: "Montserrat_400Regular",
        fontSize: 20
    },

    price: {
        color: "#3C3C3A",
        fontFamily: "Montserrat_400Regular",
        fontSize: 15
    }
});