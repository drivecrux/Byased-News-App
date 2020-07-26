import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  Animated,
  Text,
} from "react-native";

import CustomModal from "../components/CustomModal";
import NewsCard from "../components/NewsCard";
import SafeViewAndroid from "../components/SafeViewAndroid";
import { API_KEY } from "react-native-dotenv";

const H_MAX_HEIGHT = 90;
const H_MIN_HEIGHT = 55;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

const MainScreen = ({ props, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    source: "",
    imageUrl: "",
    time: "",
    title: "",
    description: "",
    url: "",
  });

  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&language=en&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetch(
      `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&language=en&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setRefreshing(false));
  }, [refreshing]);

  const refreshControl = (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      tintColor="white"
    />
  );

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <NewsCard
      imageUrl={item.urlToImage}
      title={item.title}
      onPress={() => {
        setModalVisible(true);
        //modalDetailsHandler(item);
        setSelectedItem({
          source: `${item.source.name}`,
          imageUrl: `${item.urlToImage}`,
          time: `${item.publishedAt}`,
          title: `${item.title}`,
          description: `${item.description}`,
          url: `${item.url}`,
        });
      }}
    />
  );

  /* const modalDetailsHandler = ({ item }) => {
    setSelectedItem({
      source: `${item.source.name}`,
      imageUrl: `${item.urlToImage}`,
      time: `${item.publishedAt}`,
      title: `${item.title}`,
      description: `${item.description}`,
      url: `${item.url}`,
    });
  };*/

  return (
    <SafeAreaView
      style={[styles.safeContainer, SafeViewAndroid.AndroidSafeArea]}
    >
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="white" />
          </View>
        ) : (
          <View style={styles.flatlistContainer}>
            <Animated.View
              style={[styles.headerContainer, { height: headerScrollHeight }]}
            >
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Your Feed</Text>
              </View>
            </Animated.View>
            <FlatList
              data={data}
              style={styles.listContainer}
              keyExtractor={keyExtractor}
              refreshControl={refreshControl}
              renderItem={renderItem}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
                { useNativeDriver: false }
              )}
              scrollEventThrottle={16}
            />
            <CustomModal
              visible={isModalVisible}
              toggleModal={toggleModal}
              selectedItem={selectedItem}
              onBackdropPress={toggleModal}
              onSwipeComplete={toggleModal}
              onBackButtonPress={toggleModal}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#2f3136",
  },
  container: {
    backgroundColor: "#2F3136",
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  flatlistContainer: {
    flex: 1,
  },
  headerContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    width: "100%",
    overflow: "hidden",
    zIndex: 999,
    // STYLE
    padding: 10,
    backgroundColor: "#2f3136",
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  headerText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 30,
  },
  listContainer: {
    flex: 1,
    paddingTop: H_MAX_HEIGHT,
  },
});
