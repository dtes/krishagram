import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Left, Right, Body } from 'native-base';
import { DrawerActions } from 'react-navigation';


export const DrawerButton = ({ navigation }) => (
  <Left>
    <Icon 
      name="ios-menu"
      style={{ padding: 8 }}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  </Left>
);

