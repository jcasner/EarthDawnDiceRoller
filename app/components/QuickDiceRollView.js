import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import QuickButton from './QuickButton';
import { containerStyles, textStyles } from './styles';

const mapStateToProps = state => ({
  quickButtons: state.quickButtons
});

const QuickDiceCollection = props =>
  <View>
    <Text style={textStyles.quick}>Quick Roll Buttons</Text>
    <View style={containerStyles.quickBtnContainer}>
      {props.quickButtons.map((btn, index) =>
        <QuickButton
          handlePress={props.handlePress}
          key={index}
          name={btn.name}
          step={btn.value} />
      )}
    </View>
  </View>;

export default connect(mapStateToProps)(QuickDiceCollection);
