/* #region  Global Imports */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
/* #endregion */

/* #region  Local Imports */
import RootReducer from '@store/reducer';
import RootSaga from '@store/saga';
import {Persistor} from 'redux-persist/es/types';
/* #endregion */

const persistConfig = {
  /**
   * Blacklist state that we do not need/want to persist
   */
  blacklist: [
    // 'auth',
  ],
  key: 'root',
  storage: AsyncStorage
};

export const CreateStore = (): {persistor: Persistor; store: never} => {
  const middleware = [];
  const enhancers = [];

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));

  // Redux persist
  const persistedReducer = persistReducer(persistConfig, RootReducer);

  const store: never = createStore(persistedReducer, compose(...enhancers));
  const persistor = persistStore(store);

  // Kick off the root saga
  sagaMiddleware.run(RootSaga);

  return {persistor, store};
};
