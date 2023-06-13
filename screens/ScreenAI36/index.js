import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Button, DatePickerAndroid, Picker } from 'react-native';

const ProfileScreen = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [fullName, setFullName] = useState('John Doe');
  const [username, setUsername] = useState('johndoe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [bio, setBio] = useState('Lorem ipsum dolor sit amet.');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState({
    street: '',
    city: '',
    zip: '',
    state: '',
    country: ''
  });

  const openDatePicker = async () => {
    try {
      const {
        action,
        year,
        month,
        day
      } = await DatePickerAndroid.open({
        date: new Date()
      });

      if (action !== DatePickerAndroid.dismissedAction) {
        setDob(`${month + 1}/${day}/${year}`);
      }
    } catch ({
      code,
      message
    }) {
      console.warn('Cannot open date picker', message);
    }
  };

  return <ScrollView>
      <View>
        <Button title="Request To Be Attached as a Social Ally" onPress={() => {}} />
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.pKOfeiCA} />
        {isEditMode ? <TextInput value={fullName} onChangeText={setFullName} placeholder="Full Name" /> : <Text>{fullName}</Text>}
        {isEditMode ? <TextInput value={username} onChangeText={setUsername} placeholder="Username" /> : <Text>{username}</Text>}
        {isEditMode ? <TextInput value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" /> : <Text>{email}</Text>}
        {isEditMode ? <TextInput value={bio} onChangeText={setBio} placeholder="Bio" multiline /> : <Text>{bio}</Text>}
        {isEditMode ? <TouchableOpacity onPress={openDatePicker}>
            <Text>{dob || 'Select Date of Birth'}</Text>
          </TouchableOpacity> : <Text>{dob}</Text>}
        {isEditMode ? <Picker selectedValue={gender} onValueChange={itemValue => setGender(itemValue)}>
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Prefer not to say" value="other" />
          </Picker> : <Text>{gender}</Text>}
        {isEditMode ? <TextInput value={address.street} onChangeText={text => setAddress(prev => ({ ...prev,
        street: text
      }))} placeholder="Street Address" /> : <Text>{address.street}</Text>}
        {isEditMode ? <TextInput value={address.city} onChangeText={text => setAddress(prev => ({ ...prev,
        city: text
      }))} placeholder="City" /> : <Text>{address.city}</Text>}
        {isEditMode ? <TextInput value={address.zip} onChangeText={text => setAddress(prev => ({ ...prev,
        zip: text
      }))} placeholder="Zip Code" /> : <Text>{address.zip}</Text>}
        {isEditMode ? <TextInput value={address.state} onChangeText={text => setAddress(prev => ({ ...prev,
        state: text
      }))} placeholder="State" /> : <Text>{address.state}</Text>}
        {isEditMode ? <TextInput value={address.country} onChangeText={text => setAddress(prev => ({ ...prev,
        country: text
      }))} placeholder="Country" /> : <Text>{address.country}</Text>}
        <Button title={isEditMode ? 'Save' : 'Edit'} onPress={() => setIsEditMode(!isEditMode)} />
      </View>
    </ScrollView>;
};

export default ProfileScreen;

const _styles = StyleSheet.create({
  pKOfeiCA: {
    width: 100,
    height: 100
  }
});