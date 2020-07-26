import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import LeftCommentsScreen from "./screens/LeftCommentsScreen";
import NeutralCommentsScreen from "./screens/NeutralCommentsScreen";
import RightCommentsScreen from "./screens/RightCommentsScreen";

const MainStack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

function CommentsTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ iconName, color, size }) => {
          if (route.name === "Left") {
            iconName = "align-left";
          } else if (route.name === "Neutral") {
            iconName = "align-center";
          } else if (route.name === "Right") {
            iconName = "align-right";
          }

          return <FontAwesome5 name={iconName} size={20} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#ff555d",
        inactiveTintColor: "gray",
        showIcon: true,
        showLabel: false,
        tabStyle: { borderRadius: 10, margin: 5 },
        style: {
          backgroundColor: "#36393f",
          shadowColor: "#000000",
          shadowOpacity: 0.26,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 8,
          elevation: 5,
        },
        renderIndicator: () => null,
      }}
    >
      <Tab.Screen name="Left" component={LeftCommentsScreen} />
      <Tab.Screen name="Neutral" component={NeutralCommentsScreen} />
      <Tab.Screen name="Right" component={RightCommentsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2f3136",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontWeight: "bold" },
          headerHideShadow: true,
        }}
      >
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <MainStack.Screen
          name="Feed"
          component={MainScreen}
          options={({ route }) => ({
            // headerTitle: "Hi " + route.params.name + "!",
            headerShown: false,
            headerBackTitleVisible: false,
          })}
        />
        <MainStack.Screen
          name="CommentsTab"
          component={CommentsTab}
          options={{ headerTitle: "Comments" }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
