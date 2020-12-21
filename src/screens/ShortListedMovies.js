import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, StyleSheet} from 'react-native';
import {Container, TextView} from '../elements';
import {SPACING} from '../theme/Theme';
import MovieCard from '../components/MovieCard';
import TitleDarkModeRow from '../components/TitleDarkModeRow';
import {shortlistReducerTypes} from '../redux/reducers/MovieShortlistReducer';
const ShortListedMovies = () => {
  const {shortlistedMovies} = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const renderItem = ({item}) => {
    const {imdbID} = item;
    const isShortlisted = shortlistedMovies[imdbID];
    return (
      <MovieCard
        movieData={item}
        isShortlisted={isShortlisted}
        onPress={() => {
          if (!isShortlisted) {
            dispatch({
              type: shortlistReducerTypes.ADD_MOVIE,
              movie: item,
            });
          } else {
            dispatch({
              type: shortlistReducerTypes.REMOVE_MOVIE,
              removeMovieId: imdbID,
            });
          }
        }}
      />
    );
  };
  return (
    <Container container>
      <TitleDarkModeRow
        text={'SHORTLISTED \nMOVIES'}
        containerStyle={styles.titleStyle}></TitleDarkModeRow>
      <FlatList
        data={Object.values(shortlistedMovies)}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={useCallback(({imdbID}) => imdbID, [])}
        ListEmptyComponent={
          <Container style={styles.emptyContainerStyle}>
            <TextView>'No Movies Shortlisted'</TextView>
          </Container>
        }
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    paddingHorizontal: SPACING.SMALL,
    marginBottom: SPACING.LARGE,
  },
  emptyContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShortListedMovies;
