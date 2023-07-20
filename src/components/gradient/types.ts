import { ReactNode } from 'react';
import { LinearGradientProps } from 'react-native-linear-gradient';

export interface GradientType extends Omit<LinearGradientProps, 'colors'> {
  children: ReactNode;
  colors?: (string | number)[]; // Allow the same type as in LinearGradientProps, but make it optional
}
