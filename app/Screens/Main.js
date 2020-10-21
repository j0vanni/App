import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function Main(props) {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
});

export default Main;
