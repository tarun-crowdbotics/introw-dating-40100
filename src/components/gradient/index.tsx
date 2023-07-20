import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientType } from './types';

const AppGradient: FC<GradientType> = ({
  children,
  colors = [
    '#97ECFF',
    'rgba(218, 240, 255, 0.63)',
    'rgba(255, 255, 255, 0.00)',
    '#FFEFE2',
  ],
  ...otherProps
}) => {
  return (
    <LinearGradient
      colors={colors}
      style={styles.gradientStyle}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      {...otherProps}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientStyle: { flex: 1, justifyContent: 'center' },
});

export default AppGradient;
