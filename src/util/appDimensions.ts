import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;

const guidelineBaseHeight = 680;

const scale = (size: number) => (width / guidelineBaseWidth) * size;

const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const screenHorizontalPadding = moderateScale(20);

const screenVerticalPadding = verticalScale(16);

const getDeviceHeight = () => {
  console.log('height', height);
  const dpi = PixelRatio.get();
  // Returns the device pixel density. Some examples:
  //           PixelRatio.get() === 1
  //           mdpi Android devices (160 dpi)
  //           PixelRatio.get() === 1.5
  //           hdpi Android devices (240 dpi)
  //           PixelRatio.get() === 2
  //           iPhone 4, 4S
  //           iPhone 5, 5c, 5s
  //           iPhone 6
  //           xhdpi Android devices (320 dpi)
  //           PixelRatio.get() === 3
  //           iPhone 6 plus
  //           xxhdpi Android devices (480 dpi)
  //           PixelRatio.get() === 3.5
  //           Nexus 6
  console.log(Platform.OS, dpi);
  return height;
};

export {
  scale,
  verticalScale,
  moderateScale,
  screenHorizontalPadding,
  screenVerticalPadding,
  getDeviceHeight,
};
