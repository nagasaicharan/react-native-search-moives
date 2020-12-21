import React from 'react';
import {Container, MIcon, TextView} from '../elements';
import {withTheme} from '../theme';
import {Switch, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {themeReducerTypes} from '../redux/reducers/ThemeReducer';
const TitleDarkModeRow = ({text, theme: {fonts, colors}, containerStyle}) => {
  const {darkMode} = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <Container style={[styles.containerStyle, containerStyle]}>
      <TextView titleh2 style={[fonts.bold, styles.textStyle]}>
        {text}
      </TextView>
      <Container style={styles.iconContainerStyle}>
        {darkMode ? (
          <MIcon name="brightness-2" size={25} />
        ) : (
          <MIcon name="brightness-7" size={25} />
        )}
        <Switch
          thumbColor={colors.backgroundGreenVariant1}
          onValueChange={() => {
            dispatch({type: themeReducerTypes.CHANGE_MODE});
          }}
          value={darkMode}
        />
      </Container>
    </Container>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {marginTop: 20},
  iconContainerStyle: {flexDirection: 'row', alignItems: 'center'},
});

export default withTheme(TitleDarkModeRow);
