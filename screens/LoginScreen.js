import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const LoginScreen1 = ({ navigation }) => {
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
        <KeyboardAvoidingView>
          <View style={styles.top}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 5,
                backgroundColor: "#36393F",
                width: "70%",
                height: "50%",
                borderRadius: 25,
                shadowColor: "#000000",
                shadowOpacity: 0.26,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 8,
                elevation: 5,
              }}
            >
              <Text
                style={{ fontSize: 24, fontWeight: "bold", color: "#ff555d" }}
              >
                Username
              </Text>
              <TextInput
                style={styles.input}
                placeholder=""
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
                    color="#2f3136"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.footer}>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: "#ff555d",
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: "#2f3136",
              borderTopLeftRadius: 75,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Byased</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f3136",
  },
  top: {
    height: 0.61 * height,
    backgroundColor: "#ff555d",
    borderBottomRightRadius: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    textAlign: "center",
    borderBottomColor: "#ff555d",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "80%",
    marginVertical: 20,
    padding: 5,
    //backgroundColor: "#303339",
    fontWeight: "600",
    color: "#FFFFFF",
    fontSize: 16,
  },
  footer: {
    flex: 1,
  },
  enter: {
    alignItems: "flex-start",
    marginTop: 10,
  },
  continue: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#ff555d",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#ff555D",
    //fontFamily: "Futura",
  },
});
