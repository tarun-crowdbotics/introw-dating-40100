import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppButton from '../../components/button';
import AppInput from '../../components/input';
import AppText from '../../components/text';
import { DONT_HAVE_ACC, EMAIL_ADD, WELCOME_BACK } from '../../util/strings';
import { handleErrorMessage } from '../../util/util';
import { useLoginMutation } from './services/apiService';
import { getLoginData } from './services/storageService';
import { styles } from './styles';
import { LoginFormValues, LoginStackComponent } from './type';
import {
  EMAIL,
  ERROR,
  FORGOT_PASSWORD,
  LOGIN,
  PASSWORD,
  SIGN_UP,
} from './util/strings';
import { validationSchema } from './util/validation';

const LoginScreen: LoginStackComponent<'Login'> = ({ navigation }) => {
  const [loginTrigger, { isLoading }] = useLoginMutation();
  const [secure, setSecure] = useState(true);

  useEffect(() => {
    getLoginData().then((loginData) => {
      if (loginData) {
        navigation.replace('Home');
      }
    });
  }, [navigation]);

  const handleLogin = (values: LoginFormValues) => {
    loginTrigger({ email: values.email, password: values.password })
      .unwrap()
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((error) => Alert.alert(ERROR, handleErrorMessage(error?.data)));
  };

  function handleForgotPassword() {
    Alert.alert('Forgot passowrd', 'Forgot password action');
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="always">
      <View style={styles.subContainer}>
        <AppText style={styles.heading}>{WELCOME_BACK}</AppText>
        <AppText style={styles.headingInfo}>
          {DONT_HAVE_ACC}{' '}
          <AppText
            style={styles.signupHeading}
            onPress={() => Alert.alert('yo')}>
            {SIGN_UP}
          </AppText>
        </AppText>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleLogin}
          validationSchema={validationSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <View>
              <AppText style={styles.emailLabel}>
                {EMAIL_ADD} <AppText style={styles.astrick}>*</AppText>
              </AppText>
              <AppInput
                style={styles.input}
                placeholder={EMAIL}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                errorMessage={
                  touched.email && errors?.email ? errors.email : undefined
                }
              />
              <AppText style={[styles.emailLabel, styles.passwordLabel]}>
                {PASSWORD} <AppText style={styles.astrick}>*</AppText>
              </AppText>
              <AppInput
                style={styles.input}
                placeholder={PASSWORD}
                secureTextEntry={secure}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                errorMessage={
                  touched.password && errors?.password
                    ? errors?.password
                    : undefined
                }
                rightIcon={{
                  type: 'ionicon',
                  name: secure ? 'eye-off' : 'eye',
                  onPress: () => setSecure(!secure),
                }}
              />

              <View style={styles.bottomContainer}>
                <AppButton
                  buttonStyle={styles.signUpButton}
                  titleStyle={styles.signupText}
                  title={FORGOT_PASSWORD}
                  onPress={handleForgotPassword}
                />
              </View>

              <AppButton
                containerStyle={styles.buttonStyle}
                title={LOGIN}
                onPress={() => handleSubmit()}
                loading={isLoading}
              />
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
