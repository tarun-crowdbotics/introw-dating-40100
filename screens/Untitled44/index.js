import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, TouchableOpacity, TextInput, Button, Picker } from "react-native";

const PrivateDiary = () => {
  const [wishTitle, setWishTitle] = useState("");
  const [wishCategory, setWishCategory] = useState("");
  const [wishText, setWishText] = useState("");
  const [dateTime, setDateTime] = useState("");
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text style={styles.headerText}>Private Diary</Text>
        <Button title="Back" onPress={() => {}} />
        <Text>Private Diary</Text>
        <Text>Desires</Text>
        <Text>Dreams</Text>
        <Text>Goals</Text>
        <TouchableOpacity>
          <Text>Send a Wish</Text>
        </TouchableOpacity>
        <Picker>
          <Picker.Item label="Select Specific Friend" value="" />
        </Picker>
        <TextInput style={styles.input} placeholder="Wish Title" onChangeText={text => setWishTitle(text)} value={wishTitle} />
        <Picker selectedValue={wishCategory} onValueChange={itemValue => setWishCategory(itemValue)}>
          <Picker.Item label="Desires" value="desires" />
          <Picker.Item label="Dreams" value="dreams" />
          <Picker.Item label="Goals" value="goals" />
        </Picker>
        <TextInput style={styles.input} placeholder="Write a Wish" onChangeText={text => setWishText(text)} value={wishText} />
        <TextInput style={styles.input} placeholder="Date/Time" onChangeText={text => setDateTime(text)} value={dateTime} />
        <Button title="Save & Send" onPress={() => {}} />
        <Button title="See My Wishes" onPress={() => {}} />
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
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10
  }
});
export default PrivateDiary;