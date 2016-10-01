import React from 'react'
import { Component } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import DiceRollerAppNavigator from './components/DiceRollerAppNavigator';
import createStore from './createStore';

const store = createStore();
persistStore(store, {storage: AsyncStorage});

const Main = () => {
  return (
    <Provider store={store}>
      <DiceRollerAppNavigator />
    </Provider>
  )
}

export default Main;
