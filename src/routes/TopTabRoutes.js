import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Login from "../screens/Login";
import Register from "../screens/Register";

const TopTab = createMaterialTopTabNavigator();

export default function TopTabRoutes() {
    return(
        <TopTab.Navigator
            screenOptions={{
                swipeEnabled: false,
                tabBarPressColor: "transparent",
                tabBarActiveTintColor: "#F9F9F9",
                tabBarInactiveTintColor: "#909090",

                tabBarContentContainerStyle: {
                    marginTop: 50
                },

                tabBarLabelStyle: {
                    fontFamily: "Marcellus_400Regular",
                    fontSize: 20
                },

                tabBarItemStyle: {
                    width: 150
                },

                tabBarStyle: {
                    backgroundColor: "#272727"
                },

                tabBarIndicatorStyle: {
                    backgroundColor: "#D9BB84"
                }
            }}
        >
            <TopTab.Screen 
                name="Login" 
                component={ Login }
                options={{
                    title: "ENTRAR"
                }}
            />
            <TopTab.Screen 
                name="Register" 
                component={ Register }
                options={{
                    title: "CADASTRAR"
                }}
            />
        </TopTab.Navigator>
    );
}