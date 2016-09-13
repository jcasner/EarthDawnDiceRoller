import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';

import Button from './Button';
import { containerStyles, textStyles } from './styles';
import {
  quickButtonOneSelector,
  quickButtonTwoSelector,
  quickButtonThreeSelector
} from '../reducers/quickDiceReducer';

class QuickDiceRollView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handlePress,
      quickButtonOne,
      quickButtonTwo,
      quickButtonThree
    } = this.props;
    return (
      <View>
        <Text style={textStyles.quick}>Quick Roll Buttons</Text>
        <View style={containerStyles.rowContainer}>
          <Button handlePress={handlePress} step={quickButtonOne} text={quickButtonOne} bigButton={true} />
          <Button handlePress={handlePress} step={quickButtonTwo} text={quickButtonTwo} bigButton={true} />
          <Button handlePress={handlePress} step={quickButtonThree} text={quickButtonThree} bigButton={true} />
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
    })
  )
);

export default enhance(QuickDiceRollView);
