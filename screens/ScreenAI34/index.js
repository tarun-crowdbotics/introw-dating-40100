import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView, Image, Button, StyleSheet, Picker, DatePickerIOS } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [dob, setDob] = useState(new Date());
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
  return <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.photoButton}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.photoIcon} />
        <Pressable onPress={() => {
        navigation.navigate("Camera");
      }}><Text>Photos</Text></Pressable>
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Full Name" onChangeText={setFullName} value={fullName} />
      <TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} value={username} />
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} keyboardType="email-address" />
      <TextInput style={styles.bioInput} placeholder="Bio" onChangeText={setBio} multiline value="bio" />
      <DatePickerIOS date={dob} onDateChange={setDob} mode="date" />
      <Picker selectedValue={gender} style={styles.picker} onValueChange={itemValue => setGender(itemValue)}>
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Prefer not to say" value="other" />
      </Picker>
      <TextInput style={styles.input} placeholder="Street Address" onChangeText={text => setAddress({ ...address,
      street: text
    })} value={address.street} />
      <TextInput style={styles.input} placeholder="City" onChangeText={text => setAddress({ ...address,
      city: text
    })} value={address.city} />
      <TextInput style={styles.input} placeholder="Zip Code" onChangeText={text => setAddress({ ...address,
      zip: text
    })} value={address.zip} />
      <TextInput style={styles.input} placeholder="State" onChangeText={text => setAddress({ ...address,
      state: text
    })} value={address.state} />
      <TextInput style={styles.input} placeholder="Country" onChangeText={text => setAddress({ ...address,
      country: text
    })} value={address.country} />
      <Button title="Edit" onPress={() => {}} />
      <Picker selectedValue={socialAlly.name} style={styles.picker} onValueChange={itemValue => setSocialAlly({ ...socialAlly,
      name: itemValue
    })}>
        <Picker.Item label="Select Social Ally" value="" />
      </Picker>
      <TextInput style={styles.input} placeholder="Social Ally Email" onChangeText={text => setSocialAlly({ ...socialAlly,
      email: text
    })} value={socialAlly.email} />
      <TextInput style={styles.input} placeholder="Social Ally Location" onChangeText={text => setSocialAlly({ ...socialAlly,
      location: text
    })} value={socialAlly.location} />
      <TextInput style={styles.input} placeholder="Social Ally Phone Number" onChangeText={text => setSocialAlly({ ...socialAlly,
      phone: text
    })} value={socialAlly.phone} />
      <Button title="Edit/Remove Social Ally" onPress={() => {}} />
      <Button title="Save" onPress={() => {}} />
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI33");
    }}><Text style={styles.gLWoNaUx}>{"Profile Setup 1"}</Text></Pressable><Text style={styles.twsQRXbu}>Lorem ipsum…</Text><Pressable onPress={() => {
      navigation.navigate("ScreenAI34");
    }}><Text style={styles.GeKVbWCm}>{"Profile Setup 2"}</Text></Pressable></ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  photoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  photoIcon: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  },
  bioInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    textAlignVertical: 'top'
  },
  picker: {
    height: 50,
    marginBottom: 20
  },
  gLWoNaUx: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  twsQRXbu: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  GeKVbWCm: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default ProfileScreen;