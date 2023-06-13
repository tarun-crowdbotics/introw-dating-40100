import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, TouchableOpacity } from "react-native";

const ResourceLibrary = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text style={styles.headerText}>
          Resource library with videos about love, finding love, Love tips
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={styles.detailedView}>Resource Library</Text>
        <Text style={styles.subHeader}>Videos Materials</Text>
        <TouchableOpacity>
          <Text style={styles.clickable}>Love</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.clickable}>Finding Love</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.clickable}>Love Tips</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.clickable}>Select Specific Video</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.clickable}>Play Video</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  button: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  detailedView: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10
  },
  clickable: {
    fontSize: 12,
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 10
  }
});
export default ResourceLibrary;