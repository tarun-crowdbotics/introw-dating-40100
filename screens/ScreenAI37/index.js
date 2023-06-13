import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

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
      <TextInput style={styles.input} onChangeText={setCardNumber} value={cardNumber} keyboardType="numeric" maxLength={16} />
      <Text style={styles.inputLabel}>Expiration date</Text>
      <TextInput style={styles.input} onChangeText={setExpirationDate} value={expirationDate} keyboardType="numeric" maxLength={4} />
      <Text style={styles.inputLabel}>CVV</Text>
      <TextInput style={styles.input} onChangeText={setCvv} value={cvv} keyboardType="numeric" maxLength={3} />
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
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  offerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10
  },
  offerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 30
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    marginBottom: 20
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  }
});
export default SelectedOfferScreen;