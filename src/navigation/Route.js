import React from 'react';
import MoviesList from '../screens/MoviesList';
import ShortListedMovies from '../screens/ShortListedMovies';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const InitialNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={'MoviesList'}>
        <Tab.Screen name="MoviesList" component={MoviesList} />
        <Tab.Screen name="ShortListedMovies" component={ShortListedMovies} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default InitialNav;
