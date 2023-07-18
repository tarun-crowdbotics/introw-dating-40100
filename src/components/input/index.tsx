import { Input } from '@rneui/themed';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../../util/colors';
import { TextInputProps } from './type';

const AppInput: FC<TextInputProps> = (props) => {
  return (
    <Input
      inputContainerStyle={styles.input}
      containerStyle={styles.container}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.veryLightGrey,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    height: 50,
  },
  container: { paddingHorizontal: 0 },
});

export default AppInput;
