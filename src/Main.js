import React, { Component } from 'react';
import {
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Main extends Component {
  onClick() {
    Alert.alert("Click!!");
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.frame}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.view_button} onPress={this.onClick}>
            <View style={styles.view} />
            <View style={styles.view} />
            <View style={styles.view} />
          </TouchableOpacity>
          <Text style={styles.text}>MAIN PAGE</Text>
        </View>
        <View style={styles.content}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
  },
  frame: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: '#bbb',
  },
  view_button: {
    width: 35,
    height: 35,
    justifyContent: 'space-around',
    margin: 13
  },
  view: {
    height: 5,
    backgroundColor: '#333',
    borderRadius: 10
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 80
  },
  content: {
    flex: 1,
  },
});