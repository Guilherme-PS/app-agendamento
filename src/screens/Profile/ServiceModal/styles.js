import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "flex-end",
    },

    modalView: {
        height: "85%",
        width: "100%",
        backgroundColor: "#D9D9D9",
        padding: 25,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    serviceName: {
        fontFamily: "Archivo_500Medium",
        fontSize: 25,
        color: "#3C3C3A",
    },

    serviceDuration: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 15,
        lineHeight: 15,
    },

    servicePrice: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 17,
    },

    title: {
        fontFamily: "Archivo_500Medium",
        fontSize: 20,
        color: "#3C3C3A",
        marginBottom: 10,
    },

    month: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 17,
        textAlign: "center",
        marginBottom: 10,
        letterSpacing: 3,
        fontWeight: "bold",
    },

    confirmBtn: {
        padding: 15,
        borderRadius: 7
    },

    confirmBtnText: {
        color: "#f9f9f9",
        textAlign: "center",
        fontFamily: "Archivo_500Medium",
    }
});
