import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { LoginNavigator } from '../modules/loginModule';
import { OnBoarding } from '../screens/onBoarding';
import { RootStackParamsList } from './types';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnBoarding} />
        <Stack.Screen name="LoginModule" component={LoginNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
