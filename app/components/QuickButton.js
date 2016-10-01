import React from 'react';
import { Text, View } from 'react-native';

import Button from './Button';
import { containerStyles, textStyles } from './styles';

const QuickButton = props =>
  <View style={containerStyles.container}>
    <Text style={textStyles.quickButton}>{props.name}</Text>
    <Button handlePress={props.handlePress} step={props.step} text={props.step} bigButton />
  </View>

export default QuickButton;
