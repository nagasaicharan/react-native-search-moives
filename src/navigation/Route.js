import React from 'react';
import MoviesList from '../screens/MoviesList';
import ShortListedMovies from '../screens/ShortListedMovies';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {withTheme} from '../theme';
import {MIcon} from '../elements';
const Tab = createBottomTabNavigator();

const InitialNav = ({theme: {fonts, colors}}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          tabStyle: {backgroundColor: colors.backgroundPrimary},
          labelStyle: {...fonts.regular},
          activeTintColor: colors.textPrimary,
          inactiveTintColor: colors.textInactive,
        }}>
        <Tab.Screen
          name="MoviesList"
          component={MoviesList}
          options={{
            tabBarLabel: 'Search Movies',
            tabBarIcon: ({color, size}) => (
              <MIcon name={'movie'} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ShortListedMovies"
          component={ShortListedMovies}
          options={{
            tabBarLabel: 'Shortlisted',
            tabBarIcon: ({color, size}) => (
              <MIcon name={'heart'} size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default withTheme(InitialNav);
