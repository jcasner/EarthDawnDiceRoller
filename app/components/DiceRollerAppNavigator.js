import React, { Component } from 'react';
import {
  BackAndroid,
  Navigator,
  StyleSheet
 } from 'react-native';

import DiceRollerAppMain from './DiceRollerAppMain';
import DiceRollerAppSettings from './DiceRollerAppSettings';
import { containerStyles } from './styles';

let _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1) {
     return false;
  }
  _navigator.resetTo({id: 'main'})
  return true;
});

export default class DiceRollerAppNavigator extends React.Component{
  render() {
    return (
      <Navigator
        style={containerStyles.navContainer}
        initialRoute={{id: 'main'}}
        renderScene={this.navigatorRenderScene} />
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'main':
        return (<DiceRollerAppMain navigator={navigator} title="Earthdawn Dice Roller" />);
      case 'settings':
        return (<DiceRollerAppSettings navigator={navigator} title="Settings" />);
    }
  }
}
