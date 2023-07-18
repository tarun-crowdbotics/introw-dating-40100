import { StyleSheet } from 'react-native';
import {
  screenHorizontalPadding,
  screenVerticalPadding,
} from '../../util/appDimensions';

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
  gradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.3, // Adjust the opacity value as needed
  },
});

export default styles;
