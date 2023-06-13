import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const OnboardingScreen = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedPreference, setSelectedPreference] = useState(null);

  const handleNext = () => {// Navigate to the next screen
  };

  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.backgroundImage} />
      <Text style={styles.title}>I am</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={[styles.option, selectedGender === 'male' && styles.selectedOption]} onPress={() => setSelectedGender('male')}>
          <Text style={styles.optionText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.option, selectedGender === 'female' && styles.selectedOption]} onPress={() => setSelectedGender('female')}>
          <Text style={styles.optionText}>Female</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>
        Which gender do you prefer to be associated with?
      </Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={[styles.option, selectedPreference === 'men' && styles.selectedOption]} onPress={() => setSelectedPreference('men')}>
          <Text style={styles.optionText}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.option, selectedPreference === 'women' && styles.selectedOption]} onPress={() => setSelectedPreference('women')}>
          <Text style={styles.optionText}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.option, selectedPreference === 'all' && styles.selectedOption]} onPress={() => setSelectedPreference('all')}>
          <Text style={styles.optionText}>Open to all</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    resizeMode: 'cover',
    opacity: 0.5
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  option: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10
  },
  selectedOption: {
    backgroundColor: '#000'
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  nextButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default OnboardingScreen;