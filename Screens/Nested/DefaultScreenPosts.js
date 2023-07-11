import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { StyleSheet, SafeAreaView, FlatList } from "react-native";

import Profile from "../../Components/Profile.js";
import Post from "../../Components/Post.js";

import { selectEmail, selectName } from "../../redux/auth/authSelectors.js";
import { selectAuthPosts } from "../../redux/posts/postsSelectors.js";
import { getAllPosts } from "../../redux/posts/postsOperations.js";

export default function DefaultScreenPosts({ navigation, route }) {
  const [posts, setPosts] = useState([]);
  const emailUser = useSelector(selectEmail);
  const nameUser = useSelector(selectName);
  const postsAuth = useSelector(selectAuthPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
    setPosts(postsAuth);
  }, []);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <SafeAreaView style={styles.container}>
      <Profile
        avatar={require("../../assets/images/profile2.png")}
        name={nameUser}
        email={emailUser}
      />

      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Post
            image={item.photo}
            postId={item.id}
            text={item.title}
            location={item.inputLocation}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 32,
  },
});