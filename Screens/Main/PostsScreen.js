import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const NestedScreen = createStackNavigator();
import DefaultScreenPosts from "../Nested/DefaultScreenPosts";
import CommentsScreen from "../Nested/CommentsScreen";
import MapScreen from "../Nested/MapScreen";



export default function PostsScreen() {
  return (
    <NestedScreen.Navigator
      initialRouteName="DefaultScreen"
      screenOptions={{ headerShown: false }}
    >
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreenPosts}
      />
         <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
}
