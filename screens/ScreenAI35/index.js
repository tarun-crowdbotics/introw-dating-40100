import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SelectedOfferScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  const handleConfirm = () => {// Handle confirmation logic here
  };

  return <View style={styles.container}>
      <Image style={styles.offerImage} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.offerTitle}>Selected Offer/Package/Bundle</Text>
      <Text style={styles.inputLabel}>Card number</Text>
      <TextInput style={styles.input} onChangeText={setCardNumber} value={cardNumber} keyboardType="number-pad" />
      <Text style={styles.inputLabel}>Expiration date</Text>
      <TextInput style={styles.input} onChangeText={setExpirationDate} value={expirationDate} keyboardType="number-pad" />
      <Text style={styles.inputLabel}>CVV</Text>
      <TextInput style={styles.input} onChangeText={setCvv} value={cvv} keyboardType="number-pad" />
      <Text style={styles.inputLabel}>Card holder name</Text>
      <TextInput style={styles.input} onChangeText={setCardHolderName} value={cardHolderName} />
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  offerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20
  },
  offerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20
  },
  confirmButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center'
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default SelectedOfferScreen;