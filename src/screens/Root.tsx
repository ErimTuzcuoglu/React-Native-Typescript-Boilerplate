import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NativeBaseProvider} from 'native-base';
import Store from '@store';
import Screens from '@screens';

const Root = (): JSX.Element => {
  const {persistor, store} = Store;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <Screens.Splash />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default Root;
