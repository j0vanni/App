import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

const posts = [
  {
    id: "1",
    name: "jovanni ",
    text: "paris looks good ",
    timestamp: 1607550580000,
    avatar: require("../assets/profile-pic.png"),
    image: {
      uri:
        "https://cdn.discordapp.com/attachments/636237427769344010/786374368670384148/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.png",
    },
  },
  {
    id: "2",
    name: "Brian Caldy",
    text: "i love tekashi 69 ",
    timestamp: 1607464180000,
    avatar: require("../assets/profile-pic.png"),
    image: {
      uri:
        "https://cdn.discordapp.com/attachments/636237427769344010/786378130390646784/Take_in_the_Scenery.png",
    },
  },
  {
    id: "3",
    name: "David NASA",
    text: "nice webcam ",
    timestamp: 1607291380000,
    avatar: require("../assets/profile-pic.png"),
    image: require("../assets/profile.png"),
  },
  {
    id: "4",
    name: "Sunny GAMER",
    text: "hello i am sunny ",
    timestamp: 1607204980000,
    avatar: require("../assets/profile-pic.png"),
    image: require("../assets/profile.png"),
  },
  {
    id: "5",
    name: "Joe Biden",
    text: "LET'S GOOOOOOOOOOOOOOOOOO",
    timestamp: 1607032180000,
    avatar: require("../assets/profile-pic.png"),
    image: {
      uri:
        "https://cdn.discordapp.com/attachments/636237427769344010/786379848402600006/2020-12-08T193029Z_418214462_RC27JK9JKJJG_RTRMADP_3_USA-BIDEN.png",
    },
  },
];

export default class HomeScreen extends React.Component {
  renderPost = (post) => {
    return (
      <View style={styles.feedItem}>
        <Image source={post.avatar} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={styles.name}>{post.name}</Text>
              <Text style={styles.timestamp}>
                {moment(post.timestamp).fromNow()}
              </Text>
            </View>

            <Ionicons name="ios-more" size={24} color="#73788B" />
          </View>
          <Text style={styles.post}>{post.text}</Text>
          <Image
            source={post.image}
            style={styles.postImage}
            resizeMode="cover"
          />
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="ios-heart-empty"
              size={24}
              color="#73788B"
              style={{ marginRight: 16 }}
            />
            <Ionicons name="ios-chatboxes" size={24} color="#73788B" />
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Feed</Text>
        </View>

        <FlatList
          style={styles.feed}
          data={posts}
          renderItem={({ item }) => this.renderPost(item)}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: Platform.OS === "web" ? "center" : undefined,
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EBECF4",
    shadowColor: "#fff",
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
  },
  headerTitle: {
    fontFamily: "arial",
    color: "#fff",
  },
  feed: {
    marginHorizontal: 16,
  },
  feedItem: {
    backgroundColor: "#121212",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row",
    marginVertical: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16,
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    color: "#454D65",
  },
  timestamp: {
    fontSize: 11,
    color: "#fff",
    marginTop: 16,
  },
  post: {
    fontFamily: "arial",
    color: "#fff",
  },
  postImage: {
    width: Platform.OS === "web" ? 500 : undefined,
    height: Platform.OS === "web" ? 500 : 150,
    resizeMode: Platform.OS === "web" ? "contain" : undefined,
    borderRadius: 5,
    marginVertical: 16,
  },
});
