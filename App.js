import React, { useState, useEffect, useCallback } from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Allura_400Regular } from "@expo-google-fonts/allura";
import { Redressed_400Regular } from "@expo-google-fonts/redressed";
import { Marcellus_400Regular } from "@expo-google-fonts/marcellus";
import { OpenSans_400Regular } from "@expo-google-fonts/open-sans";
import { Archivo_500Medium, Archivo_600SemiBold } from "@expo-google-fonts/archivo";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";

import StackRoutes from "./src/routes/StackRoutes";
import { SQLiteProvider } from "expo-sqlite";
import { inicializeDatabase } from "./src/db/inicializeDatabase";
import { LoginProvider } from "./src/screens/Login/LoginProvider";

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect( () => {(
        async () => {
            try {
                await SplashScreen.preventAutoHideAsync();

                await Font.loadAsync({
                    Allura_400Regular,
                    Redressed_400Regular,
                    Marcellus_400Regular,
                    OpenSans_400Regular,
                    Archivo_600SemiBold,
                    Archivo_500Medium,
                    Montserrat_400Regular
                });
            }
            finally {
                setAppIsReady(true);
            }
        }
    )()}, [])

    const onLayout = useCallback( () => {
        if(appIsReady) {
            SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if(!appIsReady) {
        return null;
    }

    return (
        <View style={{ flex: 1 }} onLayout={onLayout}>
            <NavigationContainer>
                <SQLiteProvider databaseName="dbApp.db" onInit={inicializeDatabase}>
                    <LoginProvider>
                        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true}/>

                        <StackRoutes/>
                    </LoginProvider>
                </SQLiteProvider>
            </NavigationContainer>
        </View>
    );
}
