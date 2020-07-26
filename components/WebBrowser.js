import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";

const CustomWebBrowser = (props) => {
  return (
    <Text
      style={styles.linkText}
      onPress={() => {
        WebBrowser.openBrowserAsync(`${props.url}`);
      }}
    >
      Read more
    </Text>
  );
};

export default CustomWebBrowser;

const styles = StyleSheet.create({
  linkText: {
    color: "#ff555d",
    fontWeight: "bold",
  },
});
