import React, {useState, useCallback} from 'react';
import {Container, OutlinedTextInput, TextView, MIcon} from '../elements';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {withTheme} from '../theme';
import {SPACING} from '../theme/Theme';
import {API_HANDLER} from '../Utils/ServerService';
import TitleDarkModeRow from '../components/TitleDarkModeRow';
import {useDispatch, useSelector} from 'react-redux';
import {shortlistReducerTypes} from '../redux/reducers/MovieShortlistReducer';
import MovieCard from '../components/MovieCard';

let PAGE_NUMBER = 1;
const MoviesList = ({theme: {colors}}) => {
  const dispatch = useDispatch();
  const [movieSearchText, setMovieSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [movieSearchData, setMovieSearchData] = useState([]);
  let [onScrollEndIndicator, setOnScrollEndIndicator] = useState(false);
  var onEndReachedCalledDuringMomentum = false;
  const {shortlistedMovies} = useSelector((state) => state.movie);
  const onChangeText = (text) => {
    setMovieSearchText(text);
    if (text.length >= 3) {
      getMoviesData(text);
    } else {
      setMovieSearchData([]);
    }
  };
  const getMoviesData = (text = movieSearchText) => {
    setLoading(true);
    PAGE_NUMBER = 1;
    API_HANDLER.getRequest(null, {
      s: text,
      page: 1,
    })
      .then(({data}) => {
        const {Response, Search} = data;
        if (Response === 'True') {
          setMovieSearchData(Search);
          PAGE_NUMBER = PAGE_NUMBER + 1;
        } else {
          setMovieSearchData([]);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const getMoreMovies = (text = movieSearchText) => {
    if (
      !onEndReachedCalledDuringMomentum &&
      PAGE_NUMBER &&
      !onScrollEndIndicator
    ) {
      setOnScrollEndIndicator(true);
      API_HANDLER.getRequest(null, {
        s: text,
        page: PAGE_NUMBER,
      })
        .then(({data}) => {
          const {Response, Search} = data;
          if (Response === 'True') {
            setMovieSearchData((preState) => {
              return [...preState, ...Search];
            });
            PAGE_NUMBER = PAGE_NUMBER + 1;
          } else {
            PAGE_NUMBER = 0;
          }
        })
        .finally(() => {
          setOnScrollEndIndicator(false);
        });
    }
  };
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
    <Container container style={styles.containerStyle}>
      <TitleDarkModeRow text={'SEARCH \nMOVIES'}></TitleDarkModeRow>
      <OutlinedTextInput
        value={movieSearchText}
        onChangeText={onChangeText}
        placeholder={'Search movies'}
        rightView={() => {
          if (loading) {
            return (
              <ActivityIndicator color={colors.textPrimary} size={'large'} />
            );
          } else {
            return (
              <MIcon name="magnify" color={colors.textSilverCommon} size={30} />
            );
          }
        }}
      />
      <FlatList
        data={movieSearchData}
        style={styles.flatListStyle}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={useCallback(({imdbID}) => imdbID, [])}
        ListFooterComponent={() => {
          return (
            <>
              {onScrollEndIndicator ? (
                <Container style={styles.endContainer}>
                  <ActivityIndicator color={colors.textPrimary} />
                </Container>
              ) : null}
            </>
          );
        }}
        ListEmptyComponent={
          <Container style={styles.textEmptyContainer}>
            <TextView>
              {movieSearchText.length > 3
                ? 'No Movie Found'
                : 'Type Minimum 3 characters to search movie '}
            </TextView>
          </Container>
        }
        onEndReached={() => {
          getMoreMovies();
        }}
        onEndReachedThreshold={0.1}
        onMomentumScrollBegin={() => {
          onEndReachedCalledDuringMomentum = false;
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  containerStyle: {paddingHorizontal: SPACING.SMALL},
  flatListStyle: {marginHorizontal: -SPACING.SMALL},
  endContainer: {margin: 15},
  textEmptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withTheme(MoviesList);
