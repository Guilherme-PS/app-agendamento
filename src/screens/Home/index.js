import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SocialIcon } from "react-native-elements";
import styles from "./styles";
import Container from "../../components/Container";
import Brand from "../../components/Brand";
import Btn from "../../components/Btn";
import * as Linking from "expo-linking";

export default function Home({ navigation }) {
    return (
        <Container>
            <Brand />
            <View style={styles.vwImg}>
                <Image
                    source={require("../../../assets/images/ownerImg.png")}
                    style={styles.onwerPort}
                />
                <View style={styles.vwText}>
                    <Text style={styles.name}>Rodrigo Esteves</Text>

                    <Text style={styles.desc}>
                        Lorem ipsum dolor sit amet. In molestiae adipisci est
                        velit saepe qui harum dolores ex aliquid quae qui rerum
                        omnis At facere nostrum eum maxime quidem.
                    </Text>
                    <View style={styles.social}>
                        <SocialIcon
                            type="instagram"
                            onPress={() => Linking.openURL(
                                "https://www.instagram.com/rodrigoesteves.ofc?igsh=MWRubG5uMTRkeWlqbA=="
                            )}
                        />
                        <SocialIcon
                            type="facebook"
                            onPress={() => Linking.openURL(
                                "https://www.facebook.com/rodrigo.esteves.3192?mibextid=ZbWKwL"
                            )}
                        />

                        <SocialIcon
                            type="whatsapp"
                            onPress={() => Linking.openURL(
                                "https://api.whatsapp.com/send?phone=+5521964538559&text=Oi%20vim%20do%20APP"
                            )}
                        />
                    </View>
                </View>
            </View>

            <View>
                <Btn
                    title={" Realizar um Agendamento"}
                    onPress={() => navigation.navigate("Forms")}
                    type="solid"
                    fontColor="#191919"
                    icon={
                        <Feather name="scissors" size={25} color={"#191919"} />
                    }
                />
            </View>
        </Container>
    );
}
