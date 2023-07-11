import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { AntDesign, Feather } from "@expo/vector-icons";
import Post from "../../Components/Post.js";
import { postsAll } from "../../assets/images/data.js";

export default function ProfileScreen({ navigation }) {
  const [posts, setPosts] = useState(postsAll);

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={require("../../assets/images/PhotoBG.jpg")}>
          <View style={styles.box}>
            <View style={styles.container}>
              <View style={styles.imageBox}>
                <ImageBackground
                  source={require("../../assets/images/profile2.png")}
                  style={styles.imageProfile}
                ></ImageBackground>
                <TouchableOpacity style={styles.btnRemoveImage}>
                  <AntDesign name="close" size={23} color="#BDBDBD" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.logout}
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Feather name="log-out" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              </View>

              <Text style={styles.title}>Natali Romanova</Text>
            </View>

            {posts.map((item) => (
              <Post
                key={item.id}
                image={item.image}
                text={item.text}
                comments={item.comments}
                likes={item.likes}
                location={item.location}
                navigation={navigation}
              />
            ))}
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: "center",
  },

  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: 100,
  },

  imageBox: {
    top: -60,
    width: 132,
    height: 120,
    borderRadius: 16,
    overflow: "visible",
  },

  imageProfile: {
    width: "100%",
    height: "100%",
  },

  btnRemoveImage: {
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    borderColor: "#BDBDBD",
    borderWidth: 1,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    top: -40,
    left: 119,
  },

  logout: {
    top: -65,
    left: 230,
  },

  title: {
    fontWeight: "500",
    fontSize: 30,
    marginBottom: 32,
  },
});