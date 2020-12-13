import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import userInfo from "../config/userInfo";

export default function App({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.container}
    >
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
            <Ionicons
              style={{ marginTop: 20 }}
              name="ios-arrow-back"
              size={24}
              color="#52575D"
              onPress={() => navigation.navigate("LoginScreen")}
            >
              {" "}
            </Ionicons>
            <Ionicons
              style={{ marginTop: 20 }}
              name="md-more"
              size={24}
              color="#52575D"
            ></Ionicons>
          </View>

          <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
              <Image
                source={{ uri: userInfo.userPP }}
                style={[styles.image, { resizeMode: "stretch" }]}
                resizeMode="center"
              />
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
              {userInfo.userName}
            </Text>
            <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
              Photographer
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
              <Text style={[styles.text, { fontSize: 24 }]}>3</Text>
              <Text style={[styles.text, styles.subText]}>Posts</Text>
            </View>
            <View
              style={[
                styles.statsBox,
                {
                  borderColor: "#DFD8C8",
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                },
              ]}
            >
              <Text style={[styles.text, { fontSize: 24 }]}>0</Text>
              <Text style={[styles.text, styles.subText]}>Links</Text>
            </View>
          </View>

          <View style={{ marginTop: 32, alignItems: "center" }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../assets/bunny.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../assets/tree.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../assets/colorfultree.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
            </ScrollView>
          </View>
          <Text
            style={[
              styles.subText,
              styles.recent,
              {
                ...Platform.select({
                  web: {
                    position: "relative",
                    left: 750,
                    fontSize: 12,
                  },
                }),
              },
            ]}
          >
            Recent Activity
          </Text>
          <View style={{ alignItems: "center" }}>
            <View style={styles.recentItem}>
              <View style={styles.activityIndicator}></View>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                >
                  {" "}
                  <Text style={{ fontWeight: "400" }}></Text>{" "}
                  <Text style={{ fontWeight: "400" }}></Text>
                </Text>
              </View>
            </View>

            <View style={styles.recentItem}>
              <View style={styles.activityIndicator}></View>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                >
                  {" "}
                  <Text style={{ fontWeight: "400" }}></Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  text: {
    fontFamily: Platform.OS === "ios" ? "HelveticaNeue" : "normal",
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
    ...Platform.select({
      web: {
        marginHorizontal: 10,
      },
    }),
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
    ...Platform.select({
      web: {},
    }),
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: "#AB346D",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});
