import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class TitleNavBar extends Component {
  render() {
    return (
      <View style={styles.frame_style}>
        <Text style={styles.text_style}>{this.props.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  frame_style: {
    height: 60,
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: '#bbb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_style: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});