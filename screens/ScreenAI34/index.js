import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const OnboardingScreen = () => {
  const [romantic, setRomantic] = useState(false);
  const [marriage, setMarriage] = useState(false);
  const [marriageChildren, setMarriageChildren] = useState(false);
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
      <Text style={styles.title}>I am Looking for:</Text>
      <TouchableOpacity style={styles.checkboxContainer} onPress={() => setRomantic(!romantic)}>
        <Text style={styles.checkboxText}>Romantic Relationship</Text>
        <Text style={romantic ? styles.checkboxChecked : styles.checkbox} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer} onPress={() => setMarriage(!marriage)}>
        <Text style={styles.checkboxText}>Marriage</Text>
        <Text style={marriage ? styles.checkboxChecked : styles.checkbox} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer} onPress={() => setMarriageChildren(!marriageChildren)}>
        <Text style={styles.checkboxText}>Marriage & children</Text>
        <Text style={marriageChildren ? styles.checkboxChecked : styles.checkbox} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  checkboxText: {
    fontSize: 18,
    marginRight: 10
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000'
  },
  checkboxChecked: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#000'
  },
  nextButton: {
    marginTop: 30,
    backgroundColor: '#000',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18
  }
});
export default OnboardingScreen;