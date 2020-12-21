import React from 'react';
import {View} from 'react-native';
import {globalStyles, withTheme} from '../theme';

const Container = ({children, style, theme, container = false, ...rest}) => {
  return (
    <View
      {...rest}
      style={[
        {backgroundColor: theme.colors.backgroundPrimary},
        container ? globalStyles.container : {},
        style,
      ]}>
      {children}
    </View>
  );
};

export default withTheme(Container);
