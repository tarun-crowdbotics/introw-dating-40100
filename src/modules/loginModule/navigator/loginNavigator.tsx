import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import Home from '../Home';
import { Login } from '../index';
import { LoginStackParams } from '../type';
const Stack = createNativeStackNavigator<LoginStackParams>();

const LoginNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Home'} component={Home} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
