import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabButton from "../../assets/animations/BottomTabButton";

import Profile from "../screens/Profile";
import Schedules from "../screens/Schedules";
import Favorites from "../screens/Favorites";
import User from "../screens/User";

const BottomTabArr = [{
        route: "Profile",
        label: "Página Inicial",
        icon: "grid",
        component: Profile
    }, {
        route: "Schedules",
        label: "Agendamentos",
        icon: "clock",
        component: Schedules,
    }, {
        route: "Favorites",
        label: "Favoritos",
        icon: "heart",
        component: Favorites,
    }, { 
        route: "User", 
        label: "Minha Conta", 
        icon: "user", 
        component: User
    }
];

const BottomTab = createBottomTabNavigator();

export default function BottomTabRoutes() {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#191919",
                tabBarInactiveTintColor: "#909090",

                tabBarStyle: {
                    height: 75,
                    position: "absolute",
                    margin: 20,
                    borderRadius: 16,
                    backgroundColor: "#D4D4D4",
                    borderTopWidth: 0,
                },
            }}
        >
            {BottomTabArr.map((item, index) => {
                return (
                    <BottomTab.Screen
                        key={index}
                        name={item.route}
                        component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarButton: (props) => (
                                <BottomTabButton {...props} item={item} />
                            ),
                        }}
                    />
                );
            })}
        </BottomTab.Navigator>
    );
}

