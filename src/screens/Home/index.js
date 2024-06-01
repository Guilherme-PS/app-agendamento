import React from "react";
import { View, Text, Image, Dimensions, FlatList, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SocialIcon } from "react-native-elements";
import * as Linking from "expo-linking";
import Carousel from "react-native-snap-carousel";

import Container from "../../components/Container";
import Brand from "../../components/Brand";
import Btn from "../../components/Btn";
import Section from "../../components/Section";

import { galery, products } from "../../data/Portfolio/data";

import styles from "./styles";

const { width } = Dimensions.get("window");
const itemSize = width / 3;

export default function Home({ navigation }) {
    return (
        <Container>            
            <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
                <ScrollView>
                    <Brand />

                    <View style={{ paddingHorizontal: 25 }}>
                        <View style={styles.vwImg}>
                            <Image
                                source={require("../../../assets/images/ownerImg.png")}
                                style={styles.onwerPort}
                            />

                            <View style={styles.vwText}>
                                <Text style={styles.name}>Rodrigo Esteves</Text>

                                <Text style={styles.desc}>
                                    Lorem ipsum dolor sit amet. In molestiae
                                    adipisci est velit saepe qui harum dolores
                                    ex aliquid quae qui rerum omnis At facere
                                    nostrum eum maxime quidem.
                                </Text>

                                <View style={styles.social}>
                                    <SocialIcon
                                        type="instagram"
                                        onPress={() =>
                                            Linking.openURL(
                                                "https://www.instagram.com/rodrigoesteves.ofc?igsh=MWRubG5uMTRkeWlqbA=="
                                            )
                                        }
                                    />

                                    <SocialIcon
                                        type="facebook"
                                        onPress={() =>
                                            Linking.openURL(
                                                "https://www.facebook.com/rodrigo.esteves.3192?mibextid=ZbWKwL"
                                            )
                                        }
                                    />

                                    <SocialIcon
                                        type="whatsapp"
                                        onPress={() =>
                                            Linking.openURL(
                                                "https://api.whatsapp.com/send?phone=+5521964538559&text=Oi%20vim%20do%20APP"
                                            )
                                        }
                                    />
                                </View>
                            </View>
                        </View>

                        <Btn
                            title={" Realizar um Agendamento"}
                            onPress={() => navigation.navigate("Forms")}
                            type="solid"
                            fontColor="#191919"
                            icon={
                                <Feather
                                    name="scissors"
                                    size={25}
                                    color={"#191919"}
                                />
                            }
                        />
                    </View>

                    <Section sectionTop="Galeria de" sectionBottom="Fotos">
                        <View style={styles.galeryBox}>
                            <FlatList
                                data={galery}
                                numColumns={3}
                                columnWrapperStyle={{ gap: 7 }}
                                contentContainerStyle={{ gap: 3 }}
                                keyExtractor={(item) => item.url}
                                showsVerticalScrollIndicator={false}
                                scrollEnabled={false}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity style={styles.galeryBox}>
                                            <Image
                                                key={item}
                                                source={item.url}
                                                style={{
                                                    height: itemSize,
                                                    width: itemSize,
                                                }}
                                            />
                                        </TouchableOpacity>
                                    );
                                }}
                            />
                        </View>
                    </Section>

                    <Section sectionTop="Meus" sectionBottom="Produtos">
                        <Carousel 
                            data={products}
                            sliderWidth={width}
                            itemWidth={width / 1.75 }
                            loop={true}

                            renderItem={ ({ item }) => (
                                <View style={ styles.cardBox }>
                                    <Image source={item.url} style={{ width: "100%", height: width * 0.4 }}/>

                                    <View style={ styles.textBox }>
                                        <Text style={styles.productTitle}>{item.title}</Text>
                                        <Text style={styles.productDescription}>{item.description}</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </Section>

                    <Section>

                    </Section>
                </ScrollView>
            </SafeAreaView>
        </Container>
    );
}
