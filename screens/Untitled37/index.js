import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Button, TouchableOpacity, Text, View } from "react-native";

const Untitled37 = () => {
  const elbows = [{
    id: 1,
    name: "Elbow 1"
  }, {
    id: 2,
    name: "Elbow 2"
  }, {
    id: 3,
    name: "Elbow 3"
  }];

  const handleSelectElbow = elbow => {
    console.log("Selected Elbow:", elbow);
  };

  const handleSeeMore = () => {
    console.log("See More");
  };

  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Button title="Back" onPress={() => console.log("Back")} />
        {elbows.map(elbow => <TouchableOpacity key={elbow.id} onPress={() => handleSelectElbow(elbow)}>
            <View style={styles.elbowItem}>
              <Text>{elbow.name}</Text>
            </View>
          </TouchableOpacity>)}
        <Button title="See More" onPress={handleSeeMore} />
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  elbowItem: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  }
});
export default Untitled37;