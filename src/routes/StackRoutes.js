import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useLogin } from "../screens/Login/LoginProvider";

import Home from "../screens/Home/index";
import TopTabRoutes from "./TopTabRoutes";
import BottomTabRoutes from "./BottomTabRoutes";
import ScheduleSuccess from "../screens/ScheduleSuccess";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    const { isLogged } = useLogin();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {
                isLogged ? (
                    <>
                        <Stack.Screen name="UserPage" component={BottomTabRoutes} />
                        <Stack.Screen name="ConfirmSchedule" component={ScheduleSuccess}/>
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Forms" component={TopTabRoutes}/>
                    </>
                )
            }
        </Stack.Navigator>
    );
}
