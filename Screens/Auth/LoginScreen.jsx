import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);

  const login = () => {
    if (!state.email || !state.password) {
      alert("Будь ласка, введіть всі дані!!!");
      return;
    }
    setIsShowKeyboard(false);
    console.log(state);
    setIsShowPassword(false);
    setState(initialState);
     navigation.navigate("Home", { screen: "Posts" });
  };

  return (
   <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/PhotoBG.jpg")}
        style={styles.image}
      >
     <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
            value={state.email}
            onFocus={() => setIsShowKeyboard(true)}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
          />

          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              value={state.password}
              secureTextEntry={isShowPassword ? false : true}
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
            />
            <TouchableOpacity
              style={styles.btnShowPassword}
              onPress={() => setIsShowPassword(true)}
            >
            <Text style={styles.textShowPassword}>Показати</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={login}
          >
            <Text style={styles.text}>Увійти</Text>
          </TouchableOpacity>
              <Text
              style={styles.link}
              onPress={() => navigation.navigate("Registration")}
              >
                Немає акаунту? Зареєструватися
              </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </ImageBackground>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },


  form: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
    paddingTop: 32,
    paddingBottom: 100,
    paddingHorizontal: 16,
    alignItems: "center",
  },

  title: {
    marginBottom: 32,
    fontSize: 30,
    fontWeight: 500,
    color: "#212121",
  },

  input: {
    width: "100%",
    height: 50,
    marginBottom: 16,
    padding: 16,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },

  inputBox: {
    width: "100%",
    position: "relative",
  },

  btnShowPassword: {
    position: "absolute",
    right: 10,
    top: 14,
  },

  textShowPassword: {
    color: "#1B4371",
  },

  button: {
    width: "100%",
    paddingVertical: 16,
    marginTop: 20,
    marginBottom: 16,
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },

  text: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  link: {
    color: "#1B4371",
  },
});