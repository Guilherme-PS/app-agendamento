import React, { useState } from "react";
import { View } from "react-native";

import Container from "../../components/Container";
import Brand from "../../components/Brand";
import Title from "../../components/Title";
import FormItem from "../../components/FormItem";
import Btn from "../../components/Btn";
import Hr from "../../components/Hr";

export default function Login({ navigation }) {
    const [isVisible, setVisible] = useState(true);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container>
            <View style={{ paddingHorizontal: 25 }}>
                <Brand />
                <Title title="Bem-vindo(a)" />

                <View>
                    <FormItem
                        label="Usuário"
                        secureTextEntry={false}
                        placeholder="Digite seu Usuário"
                        leftIcon="user"
                        onChangeText={setUser}
                        value={user}
                    />

                    <FormItem
                        label="Senha"
                        placeholder="Digite sua Senha"
                        secureTextEntry={isVisible}
                        onPress={() => setVisible(!isVisible)}
                        leftIcon="lock"
                        rightIcon={isVisible ? "eye-off" : "eye"}
                        onChangeText={setPassword}
                        value={password}
                    />

                    <Btn
                        title="Entrar"
                        onPress={() => {}}
                        type="solid"
                        fontColor="#191919"
                    />

                    <Hr />

                    <Btn
                        title="Página Inicial"
                        onPress={() => navigation.navigate("Home")}
                        type="outline"
                        fontColor="#F9F9F9"
                    />
                </View>
            </View>
        </Container>
    );
}
