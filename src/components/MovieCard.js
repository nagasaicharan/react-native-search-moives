import React from 'react';
import {ImageBackground, Pressable, Dimensions, StyleSheet} from 'react-native';
import {Container, TextView, MIcon} from '../elements';
import {withTheme} from '../theme';
import {COLORS, SPACING} from '../theme/Theme';
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const MovieCard = ({
  movieData,
  isShortlisted,
  theme: {fonts, colors},
  onPress = () => {},
}) => {
  const {Poster, Title, Year} = movieData;
  return (
    <ImageBackground source={{uri: Poster}} style={styles.imageBackgroundStyle}>
      <Container style={styles.textContainerStyle}>
        <TextView style={[fonts.semibold, styles.titleStyle]}>{Title}</TextView>
        <Container style={styles.yearShortListContainer}>
          <TextView
            style={[
              fonts.semibold,
              {color: colors.backgroundGreenVariant2},
              styles.yearText,
            ]}>
            {Year}
          </TextView>
          <Pressable
            onPress={() => {
              onPress();
            }}>
            {isShortlisted ? (
              <MIcon
                name="heart"
                size={20}
                color={colors.backgroundGreenVariant2}
              />
            ) : (
              <MIcon
                name="heart-outline"
                size={20}
                color={colors.backgroundGreenVariant2}
              />
            )}
          </Pressable>
        </Container>
      </Container>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackgroundStyle: {
    width: SCREEN_WIDTH / 2,
    height: SCREEN_WIDTH / 2 / 0.712,
    justifyContent: 'flex-end',
  },
  textContainerStyle: {
    backgroundColor: 'rgba(0,0,0, 0.4)',
    padding: SPACING.EXTRA_SMALL,
  },
  titleStyle: {
    color: COLORS.WHITE,
  },
  yearShortListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  yearText: {
    marginTop: SPACING.COMPACT,
  },
});

export default withTheme(MovieCard);
