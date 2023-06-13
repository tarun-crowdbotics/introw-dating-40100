import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Button, TextInput, Text, TouchableOpacity } from "react-native";

const Untitled39 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Button title="Back" onPress={() => {}} />
        <Text style={styles.headerText}>Introw Approve & Match</Text>
        <TextInput style={styles.input} placeholder="Potential Date Full Name" />
        <TouchableOpacity style={styles.approveButton} onPress={() => {}}>
          <Text style={styles.approveButtonText}>Approve Potential Date</Text>
        </TouchableOpacity>
        <Button title="Save & Match" onPress={() => {}} />
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  approveButton: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  approveButtonText: {
    color: "#fff",
    textAlign: "center"
  }
});
export default Untitled39;