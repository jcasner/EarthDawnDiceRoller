import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';

import { buttonStyles } from './styles';

class Button extends Component {
  render() {
    const { handlePress, step, text, bigButton } = this.props;
    return (
      <TouchableHighlight
        style={[buttonStyles.button, bigButton && buttonStyles.bigButton]}
        onPress={() => handlePress(step)}
        underlayColor="green">
        <Text style={[buttonStyles.buttonText, bigButton && buttonStyles.bigButtonText]}>
          {text}
        </Text>
      </TouchableHighlight>
    );
  }
}

export default Button;
