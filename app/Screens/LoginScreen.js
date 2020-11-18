import React from "react";
import * as WebBrowser from "expo-web-browser";
import { ResponseType } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import firebase from "firebase";
import {
  Button,
  SafeAreaView,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAv2AYecTmD_Njar4B8jnDT-DbOD-ADQQU",
    authDomain: "captureprojec.firebaseapp.com",
    databaseURL: "https://captureprojec.firebaseio.com",
    projectId: "captureprojec",
    storageBucket: "captureprojec.appspot.com",
    messagingSenderId: "613490391108",
    appId: "1:613490391108:web:e209761f430a2e04b46411",
    measurementId: "G-FGJ79WYXMS",
  });
}

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "687366643167-n3c917duo66cs25qsebjngdkjv3quok7.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      firebase.auth().signInWithCredential(credential);
    }
  }, [response]);

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.container}
    >
      <View style={styles.container}>
        <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        >
          <Image
            style={{ width: 200, height: 200, resizeMode: "contain" }}
            source={require("../assets/signingoogle.png")}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
});
