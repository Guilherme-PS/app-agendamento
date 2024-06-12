import React, { useState } from "react";
import { View } from "react-native";

import Container from "../../components/Container";
import Brand from "../../components/Brand";
import Title from "../../components/Title";
import FormItem from "../../components/FormItem";
import Btn from "../../components/Btn";
import Hr from "../../components/Hr";

import { useSchedulesDatabase } from "../../db/useSchedulesDatabase";

import { useLogin } from "./LoginProvider";

export default function Login({ navigation }) {
    const { handleLogin } = useLogin();
    
    const [isVisible, setVisible] = useState(true);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [userError, setUserError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const schedulesDatabase = useSchedulesDatabase();

    const handleSignIn = async (user, password) => {
        if(user !== "" && password !== "") {
            setUserError("");
            setPasswordError("");

            try {
                 const response = await schedulesDatabase.signIn(user, password);

                if(typeof(response) === "number") {
                    setUserError("");
                    handleLogin(true, response);
                }
                else {
                    setUserError("Usuário ou Senha Inválido");
                };
            }

            catch(error) {
                console.log(error);
            }
        }
        else {
            setPasswordError("Usuário ou Senha Inválido");
        }
    }

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
                        errorMessage={userError}
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
                        errorMessage={passwordError}
                    />

                    <Btn
                        title="Entrar"
                        onPress={() => { handleSignIn(user, password) }}
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
