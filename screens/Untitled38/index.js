import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, Button, View, Image } from "react-native";

const Untitled38 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Button title="Back" onPress={() => {}} />
        <Text style={styles.headerText}>My Match</Text>
        <Text style={styles.preFilledText}>Full Name</Text>
        <Text style={styles.preFilledText}>Date Email</Text>
        <Image style={styles.profilePic} source={{
        uri: "https://example.com/profile-pic.jpg"
      }} />
        <Text style={styles.preFilledText}>Location</Text>
        <Text style={styles.preFilledText}>Phone Number</Text>
        <View style={styles.buttonContainer}>
          <Button title="Chat" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  preFilledText: {
    fontSize: 18,
    marginBottom: 5
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  buttonContainer: {
    marginTop: 10
  }
});
export default Untitled38;