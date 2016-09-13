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
import { loadQuickButtons, saveQuickButton } from '../actions';
import {
  quickButtonOneSelector,
  quickButtonTwoSelector,
  quickButtonThreeSelector
} from '../reducers/quickDiceReducer';

class DiceRollerAppSettings extends Component {

  constructor(props) {
    super(props);
  }

  handleChangeValue = (id, value) => {
    this.props.saveQuickButton(id, value);
    this.props.loadQuickButtons(id);
  };

  render() {
    const {
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
          <View style={containerStyles.inputContainer}>
            <TextInput
              keyboardType = 'numeric'
              onChangeText={(text) => this.handleChangeValue(QUICK_BUTTON_ONE, text)}
              style={inputStyles.inputBox}
              value={quickButtonOne}
            />
          </View>
        </View>
        <View style={containerStyles.rowContainer}>
          <Text style={textStyles.settings}>
            Quick Button 2:
          </Text>
          <View style={containerStyles.inputContainer}>
            <TextInput
              keyboardType = 'numeric'
              onChangeText={(text) => this.handleChangeValue(QUICK_BUTTON_TWO, text)}
              style={inputStyles.inputBox}
              value={quickButtonTwo}
            />
          </View>
        </View>
        <View style={containerStyles.rowContainer}>
          <Text style={textStyles.settings}>
            Quick Button 3:
          </Text>
          <View style={containerStyles.inputContainer}>
            <TextInput
              keyboardType = 'numeric'
              onChangeText={(text) => this.handleChangeValue(QUICK_BUTTON_THREE, text)}
              style={inputStyles.inputBox}
              value={quickButtonThree}
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
      quickButtonOne: quickButtonOneSelector,
      quickButtonTwo: quickButtonTwoSelector,
      quickButtonThree: quickButtonThreeSelector
    }),
    {
      loadQuickButtons,
      saveQuickButton
    }
  )
);

export default enhance(DiceRollerAppSettings);
