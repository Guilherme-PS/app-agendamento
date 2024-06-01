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
        gap: 10,
        marginTop: 10
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
    },

    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },

    btnContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
    },

    footer: {
        paddingHorizontal: 25
    },

    footerInfo: {
        color: "#F9F9F9",
        fontSize: 10,
        marginBottom: 10
    }
});
