import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import rootReducer from './reducers';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['movie', 'theme'],
};
const reducerPersist = persistReducer(persistConfig, rootReducer);
let middlewares = [thunk];
if (__DEV__) {
  middlewares = [...middlewares, ...[logger]];
}
const store = createStore(reducerPersist, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
export default store;
