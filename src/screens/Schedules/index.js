import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

import Container from "../../components/Container";
import Brand from "../../components/Brand";
import Btn from "../../components/Btn";

export default function Schedules() {
    return(
        <Container>
            <Text style={{color: "#F9F9F9"}}>Schedules</Text>
        </Container>
    );
}