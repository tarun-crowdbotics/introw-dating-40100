import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const Untitled45 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text style={styles.headerText}>My Wishes (Pre-Filled Header Text)</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text>List of all wishes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectWish}>
          <Text>Select Specific Wish</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton}>
            <Text>Close</Text>
          </TouchableOpacity>
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
    marginBottom: 20
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  selectWish: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  editButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    padding: 10,
    width: "48%"
  },
  closeButton: {
    backgroundColor: "#F44336",
    borderRadius: 5,
    padding: 10,
    width: "48%"
  }
});
export default Untitled45;