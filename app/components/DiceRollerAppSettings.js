import React, { Component } from 'react';
import { AsyncStorage, Text, TextInput, View } from 'react-native';
import dismissKeyboard from 'dismissKeyboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';

import { containerStyles, inputStyles, textStyles } from './styles';
import {
  QUICK_BUTTON_ONE,
  QUICK_BUTTON_TWO,
  QUICK_BUTTON_THREE
} from '../constants/QuickButtonNames';
import {
  saveKarmaDie,
  saveQuickButton
} from '../actions';
import { karmaDieSelector } from '../reducers/karmaDiceReducer';
import {
  quickButtonOneSelector,
  quickButtonTwoSelector,
  quickButtonThreeSelector
} from '../reducers/quickDiceReducer';

class DiceRollerAppSettings extends Component {

  constructor(props) {
    super(props);
  }

  handleChangeKarmaDieValue = value => {
    this.props.saveKarmaDie(value);
  };

  handleChangeQuickDieValue = (id, value) => {
    this.props.saveQuickButton(id, value);
  };

  render() {
    const {
      karmaDieSides,
      quickButtonOne,
      quickButtonTwo,
      quickButtonThree
    } = this.props;
    return (
      <View style={containerStyles.topContainer}>
        <Text style={textStyles.welcome}>
          Settings
        </Text>
        <View style={containerStyles.rowContainer}>
          <Text style={textStyles.settings}>
            Quick Button 1:
          </Text>
          <Text style={textStyles.settingsSmall}>Step</Text>
          <View style={containerStyles.inputContainer}>
            <TextInput
              keyboardType = 'numeric'
              onChangeText={(text) => this.handleChangeQuickDieValue(QUICK_BUTTON_ONE, text)}
              style={inputStyles.inputBox}
              value={quickButtonOne}
            />
          </View>
        </View>
        <View style={containerStyles.rowContainer}>
          <Text style={textStyles.settings}>
            Quick Button 2:
          </Text>
          <Text style={textStyles.settingsSmall}>Step</Text>
          <View style={containerStyles.inputContainer}>
            <TextInput
              keyboardType = 'numeric'
              onChangeText={(text) => this.handleChangeQuickDieValue(QUICK_BUTTON_TWO, text)}
              style={inputStyles.inputBox}
              value={quickButtonTwo}
            />
          </View>
        </View>
        <View style={containerStyles.rowContainer}>
          <Text style={textStyles.settings}>
            Quick Button 3:
          </Text>
          <Text style={textStyles.settingsSmall}>Step</Text>
          <View style={containerStyles.inputContainer}>
            <TextInput
              keyboardType = 'numeric'
              onChangeText={(text) => this.handleChangeQuickDieValue(QUICK_BUTTON_THREE, text)}
              style={inputStyles.inputBox}
              value={quickButtonThree}
            />
          </View>
        </View>
        <View style={containerStyles.rowContainer}>
          <Text style={textStyles.settings}>
            Karma Die Sides:
          </Text>
          <Text style={textStyles.settingsSmall}>d </Text>
          <View style={containerStyles.inputContainer}>
            <TextInput
              keyboardType = 'numeric'
              onChangeText={(text) => this.handleChangeKarmaDieValue(text)}
              style={inputStyles.inputBox}
              value={karmaDieSides}
            />
          </View>
        </View>
      </View>
    );
  }
}

const enhance = compose(
  connect(
    createStructuredSelector({
      karmaDieSides: karmaDieSelector,
      quickButtonOne: quickButtonOneSelector,
      quickButtonTwo: quickButtonTwoSelector,
      quickButtonThree: quickButtonThreeSelector
    }),
    {
      saveKarmaDie,
      saveQuickButton
    }
  )
);

export default enhance(DiceRollerAppSettings);
