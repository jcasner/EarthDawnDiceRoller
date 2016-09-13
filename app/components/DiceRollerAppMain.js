import React, { Component } from 'react';
import {
  Text,
  ToolbarAndroid,
  TouchableHighlight,
  View
} from 'react-native';
import dismissKeyboard from 'dismissKeyboard';

import Button from './Button';
import DiceRollerAppSettings from './DiceRollerAppSettings';
import IndividualDiceRollView from './IndividualDiceRollView';
import QuickDiceRollView from './QuickDiceRollView';
import Result from './Result';
import { containerStyles, textStyles, toolbarStyles } from './styles';
import { rollStepDice } from '../utils/diceUtils';

class DiceRollerAppMain extends Component {
  constructor(props) {
    super(props);
    const { navigator } = this.props;
    this.state = {
      diceRolls: { }
    };
    this.handleRollClick = this.handleRollClick.bind(this);
  }

  handleRollClick(step) {
    this.setState({
    	diceRolls: rollStepDice(step)
    });
    dismissKeyboard();
  }

  navigateToSettings() {
    this.props.navigator.push({
      id: 'settings'
    })
  }

  render() {
    let diceRolls = this.state.diceRolls;
    const { title } = this.props;
    return (
      <View>
        <ToolbarAndroid style={toolbarStyles.toolbar}
          title={this.props.title}
          titleColor={'#3388FC'}
          actions={[{title: 'Settings', icon: require('../../icons/icon_settings.png'), show: 'always'}]}
          onActionSelected={this.navigateToSettings.bind(this)} />
        <View style={containerStyles.topContainer}>
          <QuickDiceRollView handlePress={this.handleRollClick} />
          <Result diceRolls={ diceRolls } />
          <IndividualDiceRollView handlePress={this.handleRollClick} />
        </View>
      </View>
    );
  }
}

export default DiceRollerAppMain;
