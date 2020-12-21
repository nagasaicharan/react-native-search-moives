import React from 'react';
import Container from './Container';
import {TextInput, Platform, StyleSheet} from 'react-native';
import {withTheme} from '../theme';
import {fontSizes, SPACING} from '../theme/Theme';
const isAndroid = Platform.OS === 'android';
const OutlinedTextInput = ({
  containerProps,
  theme,
  textStyle,
  containerStyle,
  rightView = null,
  ...rest
}) => {
  const {colors, fonts} = theme;
  return (
    <Container
      style={[
        styles.containerStyle,
        {backgroundColor: colors.backgroundSecondary},
        containerStyle,
      ]}
      {...containerProps}>
      <TextInput
        placeholderTextColor={colors.labelColor}
        autoCapitalize={'none'}
        {...rest}
        style={[
          fonts.regular,
          styles.textInputStyle,
          {
            color: colors.textPrimary,
            paddingHorizontal: SPACING.EXTRA_SMALL,
            paddingVertical: isAndroid ? SPACING.ZERO : SPACING.XXS,
          },
          textStyle,
        ]}
      />
      {rightView ? rightView() : null}
    </Container>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: SPACING.TINY,
    borderRadius: 40,
    paddingLeft: SPACING.NORMAL,
    paddingRight: SPACING.SMALL,
    marginTop: SPACING.MEDIUM,
    marginBottom: SPACING.SMALL,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputStyle: {
    fontSize: fontSizes.paragraph,
    flex: 1,
  },
});

export default withTheme(OutlinedTextInput);
