import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { containerStyles, textStyles } from './styles';
import { INVALID_STEP } from '../constants/ErrorText';

class Result extends Component {
  getDieResultLines(diceRolls) {
    let lines = [];
    diceRolls.dice && diceRolls.dice.forEach(die => {
      die.name === INVALID_STEP ?
        lines.push(`${die.name}`) :
        lines.push(`${die.name}: ${die.rolls.length > 1 ? die.rolls.join('*, ') : die.rolls}\n`);
    });
    return lines;
  }

  render() {
    const { diceRolls } = this.props;

    return (
      <View style={containerStyles.container}>
        <Text style={textStyles.totalResult}>
          {diceRolls && diceRolls.total ? diceRolls.total : 0}
        </Text>
        <Text style={textStyles.singleResult}>
          {diceRolls && diceRolls.dice ? this.getDieResultLines(diceRolls) : 'No dice rolled yet'}
        </Text>
      </View>
    );
  }
}

export default Result;
