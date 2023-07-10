import React, { useState } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

import Profile from "../../Components/Profile.js";

import { profilesAll } from "../../assets/images/data.js";

export default function PostsScreen() {
  const [profiles, setProfiles] = useState(profilesAll);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={profiles}
        renderItem={({ item }) => (
          <Profile avatar={item.avatar} name={item.name} email={item.email} />
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
    paddingLeft: 16,
  },
});