import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type LoginFormValues = {
  email: string;
  password: string;
};

export type User = {
  username: string;
  email: string;
  id: string;
  first_name: string;
  last_name: string;
  name: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginStackParams = {
  Login: undefined;
  Home: undefined;
};

export type LoginStackComponent<RouteName extends keyof LoginStackParams> =
  React.FC<{
    navigation: NativeStackNavigationProp<LoginStackParams, RouteName>;
    route: RouteProp<LoginStackParams, RouteName>;
  }>;
