import React from "react";
import Profile from "./app/Screens/Profile";
import LoginScreen from "./app/Screens/LoginScreen";
import Feed from "./app/Screens/Feed";
import HomeScreen from "./app/Screens/HomeScreen";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  StackActions,
  TabActions,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarVisible: "false",
            showLabel: "false",
          }}
        />
        <Tab.Screen name="Feed" component={HomeScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
