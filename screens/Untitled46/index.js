import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const Untitled46 = () => {
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

        <Text style={styles.headerText}>Connection History</Text>

        <View style={styles.detailsView}>
          <Text>List of all my connections</Text>
        </View>

        <TouchableOpacity style={styles.clickable}>
          <Text>Select Specific Connection</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clickable}>
          <Text>See more</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text>Close</Text>
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
    marginVertical: 5
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10
  },
  detailsView: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5
  },
  clickable: {
    padding: 10,
    marginVertical: 5
  }
});
export default Untitled46;