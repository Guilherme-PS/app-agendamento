import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    usernameBox: {
        paddingHorizontal: 25, 
        paddingVertical: 125
    },

    username: {
        color: "#f9f9f9",
        fontFamily: "Archivo_600SemiBold",
        fontSize: 30,
        textAlign: "center"
    },

    schedulesCount: {
        color: "#f9f9f9",
        fontFamily: "Montserrat_400Regular",
        fontSize: 17,
        textAlign: "center"
    },

    schedulesBtnBox: {
        flex: 1,
        backgroundColor: "#E0E0E0", 
        paddingHorizontal: 25 
    },

    schedulesPageBtn: {
        backgroundColor: "#454543",
        paddingVertical: 25,
        borderRadius: 7,
        marginTop: 25,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: 25,
        right: 25,
        top: -75
    },

    schedulesPageText: {
        color: "#f9f9f9",
        fontFamily: "Montserrat_400Regular",
        fontSize: 17,
        marginLeft: 3
    },

    titleBox: {
        marginTop: 50,
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
        color: "#3C3C3A",
        fontFamily: "Archivo_600SemiBold",
        fontSize: 30,
        lineHeight: 10,
        paddingTop: 25
    },

    subtitle: {
        color: "#454543",
        fontFamily: "Montserrat_400Regular",
        fontSize: 17,
        lineHeight: 20
    },

    cardContainer: {
        alignContent: "center",
        backgroundColor: "#D4D4D4",
        borderRadius: 5,
        marginHorizontal: 3,
        height: 225,
        width: 175,
    },

    imgContainer: {
        flex: 1,
        paddingHorizontal: 5,
        paddingTop: 5,
    },

    img: {
        borderRadius: 3,
        height: "100%",
        width: "100%",
    },

    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        marginVertical: 10
    },

    serviceName: {
        fontFamily: "Archivo_500Medium",
        fontSize: 17,
    },

    servicePrice: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 13,
        lineHeight: 13
    },

    favoriteBtn: {
        paddingHorizontal: 10,
    }
});