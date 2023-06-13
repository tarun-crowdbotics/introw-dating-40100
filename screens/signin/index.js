import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from "react-native";

const SignIn = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput style={styles.input} placeholder="Username" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <TouchableHighlight style={styles.loginButton}>
        <Pressable><Text style={styles.loginButtonText}>Log In</Text></Pressable>
      </TouchableHighlight>
      <TouchableHighlight style={styles.forgotPasswordButton}>
        <Pressable onPress={() => {
        navigation.navigate("forgotPassword");
      }}><Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text></Pressable>
      </TouchableHighlight>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15
  },
  loginButton: {
    width: "80%",
    height: 40,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  forgotPasswordButton: {
    marginBottom: 10
  },
  forgotPasswordButtonText: {
    color: "#000000",
    textDecorationLine: "underline"
  }
});
export default SignIn;