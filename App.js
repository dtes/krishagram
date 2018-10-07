import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Body, Content } from 'native-base';
import { createDrawerNavigator, DrawerItems, createStackNavigator } from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import SearchScreen from './src/screens/SearchScreen';
import { Icon } from 'native-base';


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
  SearchScreen: { screen: SearchScreen }
}, {
    headerMode: 'none'
  });

MainScreenStackNavigator.navigationOptions = {
  header: null,
  title: 'Главная',
  drawerIcon: (<Icon name="ios-home" style={{color: '#0095ff'}} />)
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