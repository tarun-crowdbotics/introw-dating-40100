import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, CheckBox } from "react-native";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSignUp = () => {
    console.log("Sign up");
  };

  const handleTermsAndPrivacy = () => {
    console.log("Terms and Privacy");
  };

  return <View style={styles.container}>
      <Text style={styles.heading}>Sign up</Text>
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <View style={styles.checkboxContainer}>
        <CheckBox value={isChecked} onValueChange={setIsChecked} style={styles.checkbox} />
        <Text style={styles.label}>
          I agree to the{" "}
          <Text onPress={handleTermsAndPrivacy} style={styles.link}>
            Terms and Conditions
          </Text>{" "}
          and{" "}
          <Text onPress={handleTermsAndPrivacy} style={styles.link}>
            Privacy Policy
          </Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or</Text>
      <View style={styles.socialContainer}>
        {
        /* Add social icons here */
      }
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  checkbox: {
    alignSelf: "center"
  },
  label: {
    margin: 8
  },
  link: {
    color: "blue"
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  },
  orText: {
    textAlign: "center",
    marginVertical: 10
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
export default Signup;