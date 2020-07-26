import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");

  const usernameHandler = (value) => {
    setName(value);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* <View style={styles.circle} /> */}
        <KeyboardAvoidingView>
          <View style={styles.loginContainer}>
            <Text style={styles.header}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Choose a username.."
              placeholderTextColor="#72767D"
              onChangeText={usernameHandler}
              value={name}
            />
            <View style={styles.enter}>
              <TouchableOpacity
                style={styles.continue}
                onPress={() => navigation.navigate("Feed")}
              >
                <Ionicons
                  name="md-arrow-round-forward"
                  size={24}
                  color="#ffffff"
                />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F3136",
    justifyContent: "center",
    alignItems: "center",
  },
  /* circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#36393F",
    position: "absolute",
    left: -120,
    top: -100, 
    shadowColor: "#000000",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  }, */
  loginContainer: {
    // flex: 1,
    padding: 40,
    marginTop: 30,
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.4,
    borderRadius: 10,
    backgroundColor: "#36393f",
    shadowColor: "#000000",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    fontWeight: "800",
    fontSize: 30,
    color: "#FFFFFF",
  },
  input: {
    marginTop: 32,
    height: 50,
    // borderWidth: StyleSheet.hairlineWidth,
    shadowColor: "#000000",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 30,
    paddingHorizontal: 16,
    backgroundColor: "#303339",
    fontWeight: "600",
    color: "#FFFFFF",
  },
  enter: {
    alignItems: "flex-start",
    marginTop: 10,
  },
  continue: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#7289DA",
    alignItems: "center",
    justifyContent: "center",
  },
});
