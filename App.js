import React, { useState, useEffect, useCallback } from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Allura_400Regular } from "@expo-google-fonts/allura";
import { Redressed_400Regular } from "@expo-google-fonts/redressed";
import { Marcellus_400Regular } from "@expo-google-fonts/marcellus";
import { OpenSans_400Regular } from "@expo-google-fonts/open-sans";

import StackRoutes from "./src/routes/StackRoutes";
import BottomTabRoutes from "./src/routes/BottomTabRoutes";

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
                    OpenSans_400Regular
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
                <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true}/>

                <StackRoutes/>
            </NavigationContainer>
        </View>
    );
}
