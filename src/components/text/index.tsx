import {Text} from '@rneui/themed';
import React, {FC} from 'react';
import {TextProps} from './type';

const AppText: FC<TextProps> = props => {
  return <Text {...props} />;
};

export default AppText;
