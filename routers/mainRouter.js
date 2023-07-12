import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Screens/Main/Home";
import MapScreen from "../Screens/Nested/MapScreen";
import CommentsScreen from "../Screens/Nested/CommentsScreen";

const MainStack = createStackNavigator();

const MainRouter = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Карта",
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
      <MainStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainRouter;
