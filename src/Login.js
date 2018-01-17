import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';
import { Actions, sceneKey } from 'react-native-router-flux';

import LableTextInput from './components/LabelTextInput';
import RoundButton from './components/RoundButton';


export default class Login extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Text style={styles.title}>LOGIN</Text>
          <View style={styles.text_wrapper}>
            <LableTextInput label="EMAIL" inputText="이메일 입력" capital='none' />
            <LableTextInput label="PASSWORD" inputText="패스워드 입력" hiding={true} />
          </View>
          <View style={styles.button_wrapper}>
            <RoundButton name="LOGIN" />
            <RoundButton name="SIGN UP" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 360,
    width: 320,
    backgroundColor: 'white',
    padding: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  text_wrapper: {
    height: 160,
    marginTop: 10,
  },
  button_wrapper: {
    height: 110,
    marginTop: 20,
  },
});
