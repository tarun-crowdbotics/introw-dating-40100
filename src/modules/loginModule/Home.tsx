import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import AppButton from '../../components/button';
import {handleErrorMessage} from '../../util/util';
import {useLogoutMutation} from './services/apiService';
import {LOGOUT} from './util/strings';

const Home: FC = () => {
  const navigation = useNavigation();
  const [logoutTrigger, {isLoading}] = useLogoutMutation();

  async function navigateToLogin() {
    await AsyncStorage.clear();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Login'}],
      }),
    );
  }

  async function onLogout() {
    logoutTrigger()
      .unwrap()
      .then(() => {
        navigateToLogin();
      })
      .catch(error => {
        Alert.alert(LOGOUT, handleErrorMessage(error?.data));
        navigateToLogin();
      });
  }

  return (
    <View style={styles.container}>
      <AppButton
        style={styles.buttonStyle}
        title={LOGOUT}
        onPress={onLogout}
        loading={isLoading}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  buttonStyle: {marginHorizontal: 20},
});
