import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

import Home from "./Screens/Main/Home";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import LoginScreen from "./Screens/Auth/LoginScreen";

export const Routers = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Registration" component={RegistrationScreen} />
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};