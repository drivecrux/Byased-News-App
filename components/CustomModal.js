import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import Modal from "react-native-modal";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";

import CustomWebBrowser from "./WebBrowser";

const CustomModal = (props) => {
  const time = moment(props.selectedItem.time || moment.now()).fromNow();
  const defImg =
    "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  return (
    <View style={{ flex: 0 }}>
      <Modal
        scrollOffset={100}
        isVisible={props.visible}
        onBackdropPress={props.onBackdropPress}
        onSwipeComplete={props.onSwipeComplete}
        swipeDirection="down"
        onBackButtonPress={props.onBackButtonPress}
        propagateSwipe={true}
      >
        <View style={styles.mainContainer}>
          <View>
            <Image
              source={{ uri: props.selectedItem.imageUrl || defImg }}
              style={styles.image}
            />
            <View style={styles.topDetails}>
              <Text style={styles.textTop}>{props.selectedItem.source}</Text>
              <Text style={styles.textTop}>{time}</Text>
            </View>
          </View>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            endFillColor="#2f3136"
          >
            <TouchableHighlight>
              <TouchableWithoutFeedback>
                <View style={styles.lowerPart}>
                  <View style={styles.content}>
                    <Text style={styles.textTitle}>
                      {props.selectedItem.title}
                    </Text>
                    <Text style={styles.text}>
                      {props.selectedItem.description}.
                      <CustomWebBrowser url={props.selectedItem.url} />
                      {/* <Text
                    style={styles.linkText}
                    onPress={() => Linking.openURL(props.selectedItem.url)}
                  >
                    Read more
                  </Text> */}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </TouchableHighlight>
          </ScrollView>
          <AntDesign
            onPress={props.toggleModal}
            name="closecircle"
            size={28}
            color="white"
            style={{ margin: 10 }}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2f3136",
    borderRadius: 50,
    margin: 5,
  },
  topDetails: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textTop: {
    margin: 5,
    fontSize: 13,
    fontStyle: "italic",
    fontSize: 10,
    color: "#DCDDDE",
  },
  scrollContainer: {
    backgroundColor: "#2f3136",
  },
  image: {
    //margin: 10,
    width: Dimensions.get("window").width * 0.95,
    height: Dimensions.get("window").height / 3,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderColor: "#ff555d",
    borderWidth: 5,
  },
  topDetails: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textTop: {
    margin: 5,
    fontSize: 13,
    fontStyle: "italic",
    fontSize: 10,
    color: "#DCDDDE",
  },
  lowerPart: {
    alignItems: "center",
  },
  content: {
    padding: 15,
    backgroundColor: "#36393f",
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  textTitle: {
    color: "#f8f9f9",
    fontSize: 24,
    fontWeight: "600",
  },
  text: {
    fontSize: 16,
    color: "#f8f9f9",
  },
  linkText: {
    color: "#ff555d",
    fontWeight: "bold",
  },
});

export default CustomModal;
