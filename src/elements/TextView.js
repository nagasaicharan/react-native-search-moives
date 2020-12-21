//  Size information
//  titleh1: 40,
//  titleh2: 34,
//  h1: 30,
//  h2: 24,
//  h3: 20,
//  h4: 18,
//  paragraph: 14,
//  small: 12,
//  extraSmall: 10,
//  xxs: 8,

import React from 'react';
import {Text} from 'react-native';
import {withTheme} from '../theme';
import {fontSizes} from '../theme/Theme';
const TextView = ({
  children,
  theme,
  style,
  titleh1,
  h1,
  h2,
  h3,
  h4,
  titleh2,
  paragraph,
  small,
  extraSmall,
  xxs,
  ...rest
}) => {
  const returnFontSize = () => {
    if (paragraph) {
      return fontSizes.paragraph;
    }
    if (titleh1) {
      return fontSizes.titleh1;
    }
    if (h1) {
      return fontSizes.h1;
    }
    if (h2) {
      return fontSizes.h1;
    }
    if (h3) {
      return fontSizes.h3;
    }
    if (h4) {
      return fontSizes.h4;
    }
    if (small) {
      return fontSizes.small;
    }
    if (extraSmall) {
      return fontSizes.extraSmall;
    }
    if (titleh2) {
      return fontSizes.titleh2;
    }
    if (xxs) {
      return fontSizes.xxs;
    }
    return fontSizes.paragraph;
  };
  return (
    <Text
      {...rest}
      style={[
        theme.fonts.regular,
        {
          color: theme.colors.textPrimary,
          fontSize: returnFontSize(),
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export default withTheme(TextView);
