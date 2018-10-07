import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '9+'];

class RoomCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: {}
    };
  }

  onPress = (num) => {
    this.setState((state, props) => {
      let nums = {...state.nums};
      nums[num] = !nums[num];
      return {nums};
    });
  }

  render() {
    return (
      <View>
        <Text>Количество комнат</Text>
        <View style={styles.wrapper}>
          {numbers.map(num => (
            <Text
              style={[styles.number, this.state.nums[num] ? styles.selected : styles.unselected ]}
              key={num}
              onPress={() => this.onPress(num)}
            >{num}</Text>
          ))}
        </View>
      </View>
    );
  }
}

export default RoomCount;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 3
  },
  number: {
    padding: 5,
    marginLeft: 3,
    width: 30,
    color: '#0095ff',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#0095ff',
    borderRadius: 3,
  },
  selected: {
    backgroundColor: '#0095ff', 
    color: 'white',
  },
  unselected: {
    backgroundColor: 'white', 
    color: '#0095ff',
  },
});