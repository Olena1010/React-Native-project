import React, { useState } from "react";
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

import { useDispatch } from "react-redux";
import { authSignInUser } from "../../redux/auth/authOperations";



const initialState = {
  email: "",
  password: "",
};

export default LoginScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const dispatch = useDispatch();

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    dispatch(authSignInUser(state));
    setState(initialState);
  };



  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require("../../assets/images/PhotoBG.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            <View
              style={{
                ...styles.formContainer,
                paddingBottom: isShowKeyboard ? 32 : 140,
              }}
            >
              <Text style={styles.title}>Увійти</Text>

              <View style={{ marginBottom: 16 }}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: focusedEmail ? "#FF6C00" : "#E8E8E8",
                  }}
                  keyboardType="email-address"
                  placeholder="Адреса електронної пошти"
                  value={state.email}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setFocusedEmail(true);
                  }}
                  onBlur={() => setFocusedEmail(false)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View style={{ position: "relative" }}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: focusedPassword ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Пароль"
                  value={state.password}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setFocusedPassword(true);
                  }}
                  onBlur={() => setFocusedPassword(false)}
                  secureTextEntry={isSecureEntry}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <TouchableOpacity
                  style={styles.passwordTextWrapper}
                  onPress={() => {
                    setIsSecureEntry((prevState) => !prevState);
                  }}
                >
                  <Text style={styles.passwordText}>
                    {isSecureEntry ? "Показати" : "Приховати"}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btn}
                onPress={() => {
                  handleSubmit();
                }}
              >
                <Text style={styles.btnTitle}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={styles.signinText}>
                  Немає аккаунта? Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formContainer: {
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    fontWeight: 500,
    fontSize: 30,
    marginBottom: 33,
    letterSpacing: 0.3,
    color: "#212121",
    
  },
  input: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    padding: 16,
  },
  passwordTextWrapper: {
    position: "absolute",
    top: "30%",
    right: 25,
  },
  passwordText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
  btn: {
    height: 50,
    marginHorizontal: 16,
    marginTop: 43,
    marginBottom: 16,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    
  },
  btnTitle: {
  color: "#FFFFFF",
  },

  signinText: {
    color: "#1B4371",
    fontSize: 18,
    textAlign: "center",
  },
});
