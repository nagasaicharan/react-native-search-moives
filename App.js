/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/es/integration/react';
import ProvidersAndNavigationContainer from './src/navigation/ProvidersAndNavigationContainer';
import {globalStyles} from './src/theme';

const App = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ProvidersAndNavigationContainer />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
