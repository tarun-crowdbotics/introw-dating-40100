import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Button, TouchableOpacity } from "react-native";
const socialAlly = {
  name: "Social Ally Name",
  email: "SocialAllyEmail@example.com",
  location: "Social Ally Location",
  phoneNumber: "123-456-7890"
};

const Untitled41 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Button title="Back" onPress={() => {}} />
        <Text style={styles.header}>List of Social Allies friends</Text>
        <TouchableOpacity>
          <Text style={styles.selectSpecifically}>Select Specifically</Text>
        </TouchableOpacity>
        <View style={styles.socialAllyInfo}>
          <Text>{socialAlly.name}</Text>
          <Text>{socialAlly.email}</Text>
          <Text>{socialAlly.location}</Text>
          <Text>{socialAlly.phoneNumber}</Text>
        </View>
        <Button title="Chat" onPress={() => {}} />
        <Button title="Edit/remove Social Ally" onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  selectSpecifically: {
    fontSize: 18,
    textDecorationLine: "underline",
    marginBottom: 10
  },
  socialAllyInfo: {
    marginBottom: 10
  }
});
export default Untitled41;