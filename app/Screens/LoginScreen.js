import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  Image,
  Platform,
  View,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";

function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <TextInput
          placeholder="username"
          placeholderTextColor="white"
          outlineStyle="none"
          textContentType="username"
          textAlign="center"
          style={{
            textAlign: "center",
            height: 40,
            width: Platform.OS === "web" ? 450 : 300,
            borderColor: "#00c9ff",
            borderWidth: 1,
            marginBottom: 10,
            borderRadius: 10,
          }}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="password"
          placeholderTextColor="white"
          textContentType="password"
          textAlign="center"
          style={{
            textAlign: "center",
            height: 40,
            width: Platform.OS === "web" ? 450 : 300,
            borderColor: "#00c9ff",
            borderWidth: 1,
            marginBottom: 10,
            borderRadius: 10,
          }}
        />
        <Button
          onPress={() => navigation.navigate("Profile")}
          title="Sign in"
          color="#0d113c"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default LoginScreen;
