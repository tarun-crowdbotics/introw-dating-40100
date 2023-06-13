import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";

const Untitled36 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <TouchableOpacity style={styles.button}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>My Favourites</Text>
        <TouchableOpacity style={styles.listItem}>
          <Text>Select Specific potential date</Text>
        </TouchableOpacity>
        <View style={styles.potentialDate}>
          <Text>Name</Text>
          <Image style={styles.profilePicture} source={{
          uri: "https://example.com/profile-picture.jpg"
        }} />
          <Text>Location</Text>
        </View>
        <View style={styles.socialAllyFriend}>
          <Text>Name</Text>
          <Image style={styles.profilePicture} source={{
          uri: "https://example.com/profile-picture.jpg"
        }} />
          <Text>Location</Text>
          <TouchableOpacity style={styles.button}>
            <Text>Chat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialAllyFriend}>
          <Text>Name</Text>
          <Image style={styles.profilePicture} source={{
          uri: "https://example.com/profile-picture.jpg"
        }} />
          <Text>Location</Text>
          <TouchableOpacity style={styles.button}>
            <Text>Chat</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  button: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  listItem: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  potentialDate: {
    marginBottom: 10
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10
  },
  socialAllyFriend: {
    marginBottom: 10
  }
});
export default Untitled36;