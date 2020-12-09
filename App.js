import React from "react";
import Profile from "./app/Screens/Profile";
import LoginScreen from "./app/Screens/LoginScreen";
import Feed from "./app/Screens/Feed";
import HomeScreen from "./app/Screens/HomeScreen";
import "react-native-gesture-handler";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
