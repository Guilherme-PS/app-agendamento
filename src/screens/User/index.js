import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

import Container from "../../components/Container";

export default function User() {
    return(
        <Container>
            <Text style={{color: "#F9F9F9"}}>USER</Text>
        </Container>
    );
}