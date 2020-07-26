import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Card from "./Card";
import CustomButton from "./CustomButton";

const NewsCard = (props) => {
  const commentsNavigation = useNavigation();

  return (
    <View style={{ flex: 1, marginVertical: 15 }}>
      <TouchableOpacity onPress={props.onPress}>
        <Card style={styles.cardContainer}>
          <View style={styles.newsContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: props.imageUrl }}
                style={styles.image}
                //resizeMode={"contain"}
              />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{props.title}.</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() =>
            commentsNavigation.navigate("CommentsTab", { screen: "Left" })
          }
          title="Left"
          style={styles.leftButton}
        />
        <CustomButton
          onPress={() =>
            commentsNavigation.navigate("CommentsTab", { screen: "Neutral" })
          }
          title="Neutral"
          style={styles.neutralButton}
        />
        <CustomButton
          onPress={() =>
            commentsNavigation.navigate("CommentsTab", { screen: "Right" })
          }
          title="Right"
          style={styles.rightButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //marginVertical: 10,
    marginHorizontal: 20,
    height: 250,
    backgroundColor: "#36393F",
  },
  newsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 2,
    width: Dimensions.get("window").width * 0.9,
    height: 200,
    overflow: "hidden",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#FFFFFF",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default NewsCard;
