import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginResponse} from '../type';
import {Keys} from '../util/keys';

const storeLoginData = async (value: LoginResponse) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(Keys.LOGIN, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getLoginData = async (): Promise<LoginResponse | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(Keys.LOGIN);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
  return null;
};

export {storeLoginData, getLoginData};
