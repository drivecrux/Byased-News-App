import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LeftCommentsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2F3136",
      }}
    >
      <Text style={{ color: "white" }}>No comments yet</Text>
    </View>
  );
};

export default LeftCommentsScreen;

const styles = StyleSheet.create({});
