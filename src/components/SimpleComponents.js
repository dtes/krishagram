import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Left, Right, Body } from 'native-base';
import { DrawerActions } from 'react-navigation';


export const DrawerButton = ({ navigation }) => (
  <Left>
    <Icon
      name="ios-menu"
      style={styles.drawerButton}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  </Left>
);

export const Fields = ({ fields, style }) => (
  <View style={{ ...style }}>
    {fields.map((field, idx) => (
      <View style={styles.fieldRow} key={idx}>
        <Text style={styles.fieldTitle}>{field.title}</Text>
        <Text style={styles.fieldValue}>{field.value}</Text>
      </View>
    ))}
  </View>
)


const styles = {
  drawerButton: { padding: 8 },
  fieldRow: { flexDirection: 'row', paddingVertical: 2, },
  fieldTitle: { flex: 1 },
  fieldValue: { flex: 1, color: 'black' },
}