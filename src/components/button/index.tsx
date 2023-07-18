import { Button } from '@rneui/themed';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../../util/colors';
import { FontSizes } from '../../util/fontUtils';
import { ButtonProps } from './type';

const AppButton: FC<ButtonProps> = (props) => {
  return (
    <Button
      buttonStyle={styles.buttonStyle}
      titleStyle={styles.titleStyle}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: { borderRadius: 25, backgroundColor: Colors.button },
  titleStyle: {
    color: Colors.white,
    fontSize: FontSizes.S18,
    fontWeight: '600',
  },
});

export default AppButton;
