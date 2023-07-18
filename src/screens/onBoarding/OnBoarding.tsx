import React, { FC } from 'react';
import { ListRenderItemInfo, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

type SlidesDataType = {
  id: string;
  title: string;
  description: string;
};

const slidesData: Array<SlidesDataType> = [
  {
    id: '1',
    title: 'Onboarding Tutorial 1 ',
    description:
      'Sample content here that talks about what the app is all about and what it can be used for. The USPs of the app and other attributes about the product. The same need to be sampled and procured from the business',
  },
  {
    id: '2',
    title: 'Onboarding Tutorial 2',
    description:
      'Sample content here that talks about what the app is all about and what it can be used for. The USPs of the app and other attributes about the product. The same need to be sampled and procured from the business',
  },
  {
    id: '3',
    title: 'Onboarding Tutorial 3',
    description:
      'Sample content here that talks about what the app is all about and what it can be used for. The USPs of the app and other attributes about the product. The same need to be sampled and procured from the business.The same need to be sampled and procured from the business ',
  },
];

const OnBoarding: FC = () => {
  const renderItem: FC<ListRenderItemInfo<SlidesDataType>> = ({
    item,
    index,
  }) => {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#97ECFF', '#DAF0FF', '#FFEFE2', '#FFFFFF']}
          start={{ x: 0, y: 0 }} // Start point (0, 0) - top left
          end={{ x: 0, y: 1 }} // End point (0, 1) - bottom left
          style={styles.gradient}
        />
      </View>
    );
  };
  return (
    <View style={[styles.appintroslider]}>
      <AppIntroSlider
        renderItem={renderItem}
        data={slidesData}
        showDoneButton={true}
      />
    </View>
  );
};

export default OnBoarding;
