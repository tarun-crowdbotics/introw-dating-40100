import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Button, Picker, DatePickerAndroid } from 'react-native';

const UserProfileScreen = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState({
    street: '',
    city: '',
    zip: '',
    state: '',
    country: ''
  });
  const [socialAlly, setSocialAlly] = useState({
    name: '',
    email: '',
    location: '',
    phone: ''
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
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.LHWEGKZV} />
        <TouchableOpacity>
          <Text>Change Profile Photo</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text>Add Photos</Text>
      </TouchableOpacity>
      <TextInput placeholder="Full Name" value={fullName} onChangeText={setFullName} />
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput placeholder="Bio" value={bio} onChangeText={setBio} multiline numberOfLines={4} />
      <TouchableOpacity onPress={openDatePicker}>
        <Text>{dob || 'Select Date of Birth'}</Text>
      </TouchableOpacity>
      <Picker selectedValue={gender} onValueChange={itemValue => setGender(itemValue)}>
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Male" value="male" />
      </Picker>
      <TextInput placeholder="Street Address" value={address.street} onChangeText={text => setAddress({ ...address,
      street: text
    })} />
      <TextInput placeholder="City" value={address.city} onChangeText={text => setAddress({ ...address,
      city: text
    })} />
      <TextInput placeholder="Zip Code" value={address.zip} onChangeText={text => setAddress({ ...address,
      zip: text
    })} />
      <TextInput placeholder="State" value={address.state} onChangeText={text => setAddress({ ...address,
      state: text
    })} />
      <TextInput placeholder="Country" value={address.country} onChangeText={text => setAddress({ ...address,
      country: text
    })} />
      <Button title="Edit" onPress={() => console.log('Edit')} />
      <Picker selectedValue={socialAlly.name} onValueChange={itemValue => setSocialAlly({ ...socialAlly,
      name: itemValue
    })}>
        <Picker.Item label="Select Social Ally" value="" />
        <Picker.Item label="Ally 1" value="ally1" />
        <Picker.Item label="Ally 2" value="ally2" />
      </Picker>
      <TextInput placeholder="Social Ally Email" value={socialAlly.email} onChangeText={text => setSocialAlly({ ...socialAlly,
      email: text
    })} keyboardType="email-address" />
      <TextInput placeholder="Social Ally Location" value={socialAlly.location} onChangeText={text => setSocialAlly({ ...socialAlly,
      location: text
    })} />
      <TextInput placeholder="Social Ally Phone Number" value={socialAlly.phone} onChangeText={text => setSocialAlly({ ...socialAlly,
      phone: text
    })} keyboardType="phone-pad" />
      <Button title="Edit/Remove Social Ally" onPress={() => console.log('Edit/Remove Social Ally')} />
      <Button title="Save" onPress={() => console.log('Save')} />
    </ScrollView>;
};

export default UserProfileScreen;

const _styles = StyleSheet.create({
  LHWEGKZV: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});