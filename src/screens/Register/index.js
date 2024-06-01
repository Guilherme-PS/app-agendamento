import React, { useState } from "react";
import { View } from "react-native";

import Container from "../../components/Container";
import Brand from "../../components/Brand";
import Title from "../../components/Title";
import FormItem from "../../components/FormItem";
import Btn from "../../components/Btn";
import Hr from "../../components/Hr";

export default function Register({ navigation }) {
    const [isVisible, setVisible] = useState(true);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    return (
        <Container>
            <View style={{ paddingHorizontal: 25 }}>
                <Brand />
                <Title title="Cadastre-se" />

                <View>
                    <FormItem
                        label="Usuário"
                        placeholder="Digite seu Usuário"
                        secureTextEntry={false}
                        onChangeText={setUser}
                        leftIcon="user"
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

                    <FormItem
                        label="Confirme sua Senha"
                        placeholder="Digite Novamente sua Senha"
                        secureTextEntry={isVisible}
                        onPress={() => setVisible(!isVisible)}
                        leftIcon="lock"
                        rightIcon={isVisible ? "eye-off" : "eye"}
                        onChangeText={setPasswordConfirm}
                        value={passwordConfirm}
                    />

                    <Btn title="Cadastrar" onPress={() => {}} type="solid" />

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
