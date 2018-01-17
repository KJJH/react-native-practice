import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


export default class LabelTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{
        flex: 1,
        width: 290,
      }}>
        <Text style={styles.text_style}>{this.props.label}</Text>
        <TextInput
          style={styles.textInput_style}
          onChangeText={(text) => this.setState({ text })}
          placeholder={this.props.inputText}
          secureTextEntry={this.props.hiding}  // 문자열 숨기기
          autoCapitalize={this.props.capital}  // 자동대문자 설정
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text_style: {
    fontSize: 15,
    marginLeft: 5,
    color: '#808080'
  },
  textInput_style: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 5
  },
});
