import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    name: {
        fontFamily: "Allura_400Regular",
        fontSize: 20,
        color: "#F9F9F9",
    },
    desc: {
        fontFamily: "OpenSans_400Regular",
        fontSize: 12,
        color: "#F9F9F9",
    },
    onwerPort: {
        height: "100%",
    },
    vwImg: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 25,
    },
    vwText: {
        flex: 1,
        flexDirection: "column",
    },
    social: {
        flexDirection: "row",
        gap: 10
    },

    galeryBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flex: 1,
    },

    cardBox: {
        backgroundColor: "#F9F9F9",
    },

    textBox: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },

    productTitle: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "OpenSans_400Regular",
        fontWeight: "bold",
        letterSpacing: 3
    },

    productDescription: {
        fontSize: 14,
        textAlign: "center",
        fontFamily: "OpenSans_400Regular"
    }
});
