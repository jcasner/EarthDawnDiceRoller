import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { toolbarStyles } from './styles';

export default class DiceRollerAppToolbar extends Component {
  render() {
    const { handlePress, title } = this.props;
    return (
      <View style={toolbarStyles.view}>
        <Text style={toolbarStyles.text}>{title}</Text>
        <TouchableHighlight onPress={handlePress} >
          <Image
            source={require('../icons/icon_settings.png')}
            style={toolbarStyles.image} />
        </TouchableHighlight>
      </View>
    );
  }
}
