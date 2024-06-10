import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home/index";
import TopTabRoutes from "./TopTabRoutes";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Forms" component={TopTabRoutes} />
        </Stack.Navigator>
    );
}
