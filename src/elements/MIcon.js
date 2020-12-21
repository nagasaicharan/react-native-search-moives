import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {withTheme} from '../theme';
const MIcon = (props) => {
  const {theme} = props;
  return <MaterialIcon color={theme.colors.buttonPrimary} {...props} />;
};

export default withTheme(MIcon);
