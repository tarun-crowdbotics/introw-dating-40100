import React, { FC } from 'react';
import { ListRenderItemInfo, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { OnBoardingIcon } from '../../assets/svg';
import AppGradient from '../../components/gradient';
import AppText from '../../components/text';
import styles from './styles';

type SlidesDataType = {
  id: string;
  title: string;
  description: string;
};

const slidesData: Array<SlidesDataType> = [
  {
    id: '1',
    title: 'Get our best recommendations',
    description:
      'Imagine you have a stock market application with main focus about market volatility, recommendation, bullish or bearish market for beginner until expert, and you need a unique and stand out, while still engaging onboarding screen that grasp people attention, and instantly feel that this is the right choice',
  },
  {
    id: '2',
    title: 'Get our best recommendations',
    description:
      'Imagine you have a stock market application with main focus about market volatility, recommendation, bullish or bearish market for beginner until expert, and you need a unique and stand out, while still engaging onboarding screen that grasp people attention, and instantly feel that this is the right choice',
  },
  {
    id: '3',
    title: 'Get our best recommendations',
    description:
      'Imagine you have a stock market application with main focus about market volatility, recommendation, bullish or bearish market for beginner until expert, and you need a unique and stand out, while still engaging onboarding screen that grasp people attention, and instantly feel that this is the right choice',
  },
];

const SkipButton: React.FC = () => {
  return <AppText style={styles.skipButtonText}>Skip</AppText>;
};

const OnBoarding: FC = () => {
  function onDone() {}

  const renderSkipButton = () => {
    return <SkipButton />;
  };

  const renderNextButton = () => {
    return (
      <View style={styles.nextButton}>
        <AppText style={styles.nextTitle}>{'Next'}</AppText>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.nextButton}>
        <AppText style={styles.nextTitle}>{'Continue'}</AppText>
      </View>
    );
  };

  const renderItem: FC<ListRenderItemInfo<SlidesDataType>> = ({ item }) => {
    return (
      <View style={styles.container}>
        <AppGradient>
          <View style={styles.gradientContainer}>
            <OnBoardingIcon />
            <AppText style={styles.title}>{item.title}</AppText>
            <AppText style={styles.description}>{item.description}</AppText>
          </View>
        </AppGradient>
      </View>
    );
  };
  return (
    <View style={[styles.appintroslider]}>
      <AppIntroSlider
        renderItem={renderItem}
        data={slidesData}
        showDoneButton={true}
        onDone={onDone}
        showSkipButton
        renderSkipButton={renderSkipButton}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        automaticallyAdjustContentInsets
      />
    </View>
  );
};

export default OnBoarding;
