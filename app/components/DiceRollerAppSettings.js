import React, { Component } from 'react';
import { AsyncStorage, Text, TextInput, View } from 'react-native';
import dismissKeyboard from 'dismissKeyboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';

import { containerStyles, inputStyles, textStyles } from './styles';
import {
  saveKarmaDie,
  saveQuickButton
} from '../actions';
import { karmaDieSelector } from '../reducers/karmaDiceReducer';
import Button from './Button';

const mapStateToProps = state => ({
  karmaDieSides: state.karmaDice.karmaDieSides,
  quickButtons: state.quickButtons
});

const QuickButtonSetting = props =>
  <View style={containerStyles.rowContainer}>
    <View style={containerStyles.wideInputContainer}>
      <TextInput
        maxLength={15}
        onChangeText={(text) => props.saveFn(props.id, text, props.step)}
        style={inputStyles.inputBox}
        value={props.name}
      />
    </View>
    <Text style={textStyles.settingsSmall}>Step</Text>
    <View style={containerStyles.inputContainer}>
      <TextInput
        keyboardType = 'numeric'
        onChangeText={(text) => props.saveFn(props.id, props.name, text)}
        style={inputStyles.inputBox}
        value={props.step}
      />
    </View>
  </View>

class DiceRollerAppSettings extends Component {

  constructor(props) {
    super(props);
  }

  handleChangeKarmaDieValue = value => this.props.saveKarmaDie(value);

  handleChangeQuickDieValue = (index, name, value) => this.props.saveQuickButton(index, name, value);

  saveSettings = () => this.props.navigator.pop();

  render() {
    const {
      karmaDieSides
    } = this.props;
    return (
      <View style={containerStyles.topContainer}>
        <Text style={textStyles.welcome}>
          Settings
        </Text>
        {this.props.quickButtons.map((btn, index) =>
          <QuickButtonSetting
            id={index}
            key={index}
            name={btn.name}
            saveFn={this.handleChangeQuickDieValue}
            step={btn.value} />
        )}
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
        <Button handlePress={this.saveSettings} text='Save' />
      </View>
    );
  }
}

const enhance = compose(
  connect(
    mapStateToProps,
    {
      saveKarmaDie,
      saveQuickButton
    }
  )
);

export default enhance(DiceRollerAppSettings);
