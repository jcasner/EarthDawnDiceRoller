import React, { Component } from 'react';
import {
  Text,
  ToolbarAndroid,
  TouchableHighlight,
  View
} from 'react-native';
import dismissKeyboard from 'dismissKeyboard';
import CheckBox from 'react-native-checkbox';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import compose from 'recompose/compose';

import Button from './Button';
import DiceRollerAppSettings from './DiceRollerAppSettings';
import IndividualDiceRollView from './IndividualDiceRollView';
import QuickDiceRollView from './QuickDiceRollView';
import Result from './Result';
import { containerStyles, textStyles, toolbarStyles } from './styles';
import { rollStepDice } from '../utils/diceUtils';
import { karmaDieSelector } from '../reducers/karmaDiceReducer';

class DiceRollerAppMain extends Component {
  constructor(props) {
    super(props);
    const { navigator } = this.props;
    this.state = {
      diceRolls: { },
      includeKarmaDie: false
    };
    this.handleRollClick = this.handleRollClick.bind(this);
    this.handleKarmaDieClick = this.handleKarmaDieClick.bind(this);
  }

  handleRollClick(step) {
    const { includeKarmaDie } = this.state;
    const { karmaDieSides } = this.props;
    this.setState({
    	diceRolls: rollStepDice(step, includeKarmaDie, karmaDieSides)
    });
    dismissKeyboard();
  }

  handleKarmaDieClick(checked) {
    this.setState({
      includeKarmaDie: checked
    });
  }

  navigateToSettings() {
    this.props.navigator.push({
      id: 'settings'
    })
  }

  render() {
    let diceRolls = this.state.diceRolls;
    const { includeKarmaDie } = this.state;
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
          <CheckBox label="Karma Die?" checked={includeKarmaDie} onChange={this.handleKarmaDieClick} />
          <Result diceRolls={ diceRolls } />
          <IndividualDiceRollView handlePress={this.handleRollClick} />
        </View>
      </View>
    );
  }
}

const enhance = compose(
  connect(
    createStructuredSelector({
      karmaDieSides: karmaDieSelector
    })
  )
);

export default enhance(DiceRollerAppMain);
