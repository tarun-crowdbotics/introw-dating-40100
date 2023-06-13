import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.icon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Image style={styles.icon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Image style={styles.icon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Image style={styles.icon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <ScrollView>
        <View style={styles.mainMenu}>
          <Image style={styles.icon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <TouchableOpacity style={styles.button}>
            <Text>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>My Match</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Report/flag Users</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Connection History</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>My Social Allies</Text>
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
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  icon: {
    width: 30,
    height: 30
  },
  mainMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 10
  }
});
export default App;