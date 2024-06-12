import React, { useState, useEffect} from "react";
import { View } from "react-native";

import Container from "../../components/Container";
import Brand from "../../components/Brand";
import Title from "../../components/Title";
import FormItem from "../../components/FormItem";
import Btn from "../../components/Btn";
import Hr from "../../components/Hr";
import { initDatabase, createDatabase, SignUp } from "../../db/database";


export default function Register({ navigation }) {
    const [isVisible, setVisible] = useState(true);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [userError, setUserError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    useState( async () => {
        await initDatabase();
    }, []);

    const handleSignUp = async (user, password, confirmPassword) => {
        if(user !== "" && password !== "" && confirmPassword !== "") {
            if(password == confirmPassword) {
                setPasswordError("");

                try {
                    await createDatabase();

                    let response = await SignUp(user, password);

                    if(response) {
                        setUserError("");
                    }
                    else {
                        setUserError("Usuário Já Cadastrado!");
                        setUser("");
                    };
                }

                catch(error) {
                    console.log(error);
                }
            }

            else {
                setPasswordError("Senhas Diferentes!");
            }
        }
    }

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

                    <FormItem
                        label="Confirme sua Senha"
                        placeholder="Digite Novamente sua Senha"
                        secureTextEntry={isVisible}
                        onPress={() => setVisible(!isVisible)}
                        leftIcon="lock"
                        rightIcon={isVisible ? "eye-off" : "eye"}
                        onChangeText={setPasswordConfirm}
                        value={passwordConfirm}
                        errorMessage={passwordError}
                    />

                    <Btn title="Cadastrar" onPress={() => { handleSignUp(user, password, passwordConfirm) }} type="solid" />

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
