import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Body, Content } from 'native-base';
import { createDrawerNavigator, DrawerItems, createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import MainScreen from './src/screens/MainScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';


export default class App extends Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}

const CustomDrawContentComponent = (props) => (
  <Container>
    <Header style={{ backgroundColor: 'white', height: 150 }}>
      <Body style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 26,
        }}>KrishaGram</Text>
      </Body>
    </Header>

    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const MainScreenStackNavigator = createStackNavigator({
  MainScreen: { screen: MainScreen },
  SearchScreen: { screen: SearchScreen },
  DetailsScreen: { screen: DetailsScreen },
}, {
    headerMode: 'none'
  });

MainScreenStackNavigator.navigationOptions = {
  header: null,
  title: 'Главная',
  drawerIcon: ({ tintColor }) => (<Icon name="ios-home" style={{ color: tintColor }} />)
}

const RootNavigator = createDrawerNavigator({
  MainScreenNav: {
    screen: MainScreenStackNavigator
  },
  FavoriteScreen: {
    screen: FavoriteScreen
  }
}, {
    initialRouteName: 'MainScreenNav',
    contentComponent: CustomDrawContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  });