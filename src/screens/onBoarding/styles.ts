import { StyleSheet } from 'react-native';
import { screenHorizontalPadding } from '../../util/appDimensions';
import { Colors } from '../../util/colors';
import { FontSizes } from '../../util/fontUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
  },
  appintroslider: {
    flex: 1,
  },
  title: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: FontSizes.S24,
    fontWeight: '600',
  },
  description: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: FontSizes.S14,
    fontWeight: '400',
    lineHeight: 20,
    marginTop: 10,
  },
  skipButtonText: {
    color: Colors.dimGrey,
    fontSize: FontSizes.S18,
    fontWeight: '600',
    marginTop: 10,
  },
  nextButton: {
    borderRadius: 25,
    backgroundColor: Colors.deepSafronColor,
    padding: 10,
  },
  nextTitle: {
    color: Colors.black,
    fontSize: FontSizes.S18,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  gradientContainer: { marginHorizontal: screenHorizontalPadding },
  dotStyle: { backgroundColor: Colors.lightGrey },
  activeDotStyle: { backgroundColor: Colors.active },
});

export default styles;
