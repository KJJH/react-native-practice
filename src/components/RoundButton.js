import React, { Component } from 'react';
import {
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';


export default class RoundButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button_style}>
        <Text style={styles.text_style}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button_style: {
    flex: 1,
    width: 290,
    borderWidth: 0.5,
    borderRadius: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  text_style: {
    fontSize: 17,
    color: 'white'
  },
});
