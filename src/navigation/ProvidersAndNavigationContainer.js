import React from 'react';
import {ThemeContextProvider} from '../theme/ThemeProvider';
import {useSelector} from 'react-redux';
import {darkTheme, normalTheme} from '../theme/Theme';
import InitialNav from './Route';
const ProvidersAndNavigationContainer = () => {
  const {darkMode} = useSelector((state) => state.theme);
  return (
    <ThemeContextProvider theme={darkMode ? darkTheme : normalTheme}>
      <InitialNav />
    </ThemeContextProvider>
  );
};

export default ProvidersAndNavigationContainer;
