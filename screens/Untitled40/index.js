import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, TouchableOpacity, TextInput } from "react-native";

const Untitled40 = () => {
  const [otherReason, setOtherReason] = useState("");

  const reportPost = reason => {
    console.log("Reported for:", reason);
  };

  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>
          Why are you reporting this?
        </Text>
        {["Spam", "Pornography", "Hatred and bullying", "Self-harm", "Violent, gory and harmful content", "Child porn", "Illegal activities (e.g. drug uses)", "Deceptive content", "Copyright and trademark infringement"].map(reason => <TouchableOpacity key={reason} style={styles.button} onPress={() => reportPost(reason)}>
            <Text style={styles.buttonText}>{reason}</Text>
          </TouchableOpacity>)}
        <Text style={styles.otherTitle}>Other</Text>
        <TextInput style={styles.input} onChangeText={setOtherReason} value={otherReason} placeholder="Enter other reason" />
        <TouchableOpacity style={styles.button} onPress={() => reportPost(otherReason)}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  backButton: {
    fontSize: 18,
    color: "#007AFF",
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  },
  otherTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
});
export default Untitled40;