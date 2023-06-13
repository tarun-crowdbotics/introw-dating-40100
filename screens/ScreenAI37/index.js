import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.icon} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <Image style={styles.icon} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
      </View>
      <View style={styles.mainMenu}>
        <Image style={styles.icon} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <TouchableOpacity style={styles.button}>
          <Text>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Approve & Match</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Report/flag Users</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.button}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Counterpart Social Ally</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Wisdom Tree</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Intro Cosmic</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  icon: {
    width: 30,
    height: 30
  },
  mainMenu: {
    alignItems: "center"
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 10
  }
});
export default App;