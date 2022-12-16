import React from 'react';
import {Provider} from 'react-redux';

import MainNavigator from './src/navigators/MainNavigator';
import store from './src/redux/store/store';
const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
