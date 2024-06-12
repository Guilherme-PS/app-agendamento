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

    hourBtn: {
        paddingVertical: 3,
        flexDirection: "row",
        justifyContent: "space-between"
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

    confirmBtn: {
        padding: 15,
        borderRadius: 7
    },

    confirmBtnText: {
        color: "#f9f9f9",
        textAlign: "center",
        fontFamily: "Archivo_500Medium",
    },

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
