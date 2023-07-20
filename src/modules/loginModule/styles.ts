import { StyleSheet } from 'react-native';
import { screenHorizontalPadding } from '../../util/appDimensions';
import { Colors } from '../../util/colors';
import { FontSizes } from '../../util/fontUtils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: FontSizes.S34,
    alignSelf: 'center',
    color: Colors.black,
    fontWeight: '600',
    marginBottom: 5,
  },
  headingInfo: {
    fontSize: FontSizes.S15,
    alignSelf: 'center',
    color: Colors.black,
    fontWeight: '400',
    marginBottom: 20,
  },
  signupHeading: { color: Colors.orange, fontWeight: '600' },
  input: {},
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signUpButton: { backgroundColor: 'transparent', paddingVertical: 0 },
  signupText: {
    color: Colors.black,
    textDecorationLine: 'underline',
    fontSize: FontSizes.S12,
    fontWeight: '400',
  },
  subContainer: {
    borderRadius: 32,
    backgroundColor: Colors.loginBackground,
    paddingHorizontal: screenHorizontalPadding,
    paddingVertical: '10%',
    marginHorizontal: screenHorizontalPadding,
  },
  emailLabel: {
    marginStart: 5,
    fontSize: FontSizes.S14,
    color: Colors.black,
    marginBottom: 5,
  },
  passwordLabel: {},
  astrick: { color: Colors.orangeRed },
  buttonStyle: { marginTop: 20 },
});
