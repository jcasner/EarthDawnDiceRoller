import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Button from './Button';
import { containerStyles, inputStyles, textStyles } from './styles';

class IndividualDiceRollView extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 1 };
  }

  onTextChanged(text) {
    // code to remove non-numeric characters from text
    this.setState({step: text})
  }

  render() {
    const { handlePress } = this.props;
    return (
      <View style={containerStyles.rowContainer}>
        <Text style={textStyles.instructions}>Step</Text>
        <View style={containerStyles.inputContainer}>
          <TextInput
            keyboardType='numeric'
            onChangeText={(text)=> this.onTextChanged(text)}
            style={inputStyles.inputBox}
            underlineColorAndroid='black'
          />
        </View>
        <Button handlePress={handlePress} step={this.state.step} text='ROLL' />
      </View>
    );
  }
}

export default IndividualDiceRollView;
