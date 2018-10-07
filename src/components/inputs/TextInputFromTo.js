import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class TextInputFromTo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
        <View style={{ flexDirection: 'row', height: 33, marginTop: 3 }}>
          <View style={styles.inputWrapper}>
            <Text style={styles.text}> от </Text>
            <TextInput style={styles.input} keyboardType={this.props.keyboardType || 'default'}></TextInput>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.text}> - до </Text>
            <TextInput style={styles.input} keyboardType={this.props.keyboardType || 'default'}></TextInput>
          </View>
        </View>
      </View>
    );
  }
}

export default TextInputFromTo;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 3,
    paddingVertical: 3,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: 'black'
  }
});
