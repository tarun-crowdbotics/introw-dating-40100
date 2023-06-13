import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, TouchableOpacity } from "react-native";

const Untitled42 = () => {
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
        <Text style={styles.title}>Counterpart Social Ally</Text>
        <TouchableOpacity style={styles.selectAlly}>
          <Text>Select Specific Ally</Text>
        </TouchableOpacity>
        <Text>Social Ally Name: John Doe</Text>
        <Text>Social Ally Email: john.doe@example.com</Text>
        <Text>Social Ally Location: New York, USA</Text>
        <Text>Social Ally Phone Number: +1 (123) 456-7890</Text>
        <TouchableOpacity style={styles.button}>
          <Text>Chat</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  selectAlly: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  }
});
export default Untitled42;