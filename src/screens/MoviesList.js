import React from 'react';
import {Container} from '../elements';
import {Button, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {themeReducerTypes} from '../redux/reducers/ThemeReducer';
const MoviesList = () => {
  const dispatch = useDispatch();
  return (
    <Container container>
      <Text>jlfsdhjh</Text>
      <Button
        title={'switchThem'}
        onPress={() => {
          dispatch({
            type: themeReducerTypes.CHANGE_MODE,
          });
        }}
      />
    </Container>
  );
};

export default MoviesList;
