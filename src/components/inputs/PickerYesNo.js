import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Picker, Item, Icon } from 'native-base';

const values = [
  { id: 1000, name: 'Не важно' },
  { id: 1, name: 'да' },
  { id: 2, name: 'нет' },
]

class PickerYesNo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="ios-arrow-down-outline" />}
            style={{ flex: 1 }}
            selectedValue={this.state.selectedVal}
            onValueChange={(val) => { this.setState({ selectedVal: val }) }}
          >
            {values.map((type) => (
              <Picker.Item label={type.name} value={type.id} key={type.id} />
            ))}
          </Picker>
        </Item>
      </View>
    );
  }
}

export default PickerYesNo;
