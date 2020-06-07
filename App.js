import 'react-native-gesture-handler';
import React from 'react';

import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import {PersistGate} from 'redux-persist/integration/react';
import Router from './src/navigation/router';
import configureStore from './src/redux/configureStore';

const {persistor, store} = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <PaperProvider>
        <Router />
      </PaperProvider>
    </PersistGate>
  </Provider>
);

export default App;
