import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Header, Left, Body, Icon } from 'native-base';
import { DrawerButton } from '../components/SimpleComponents';


class FavoriteScreen extends Component {

  static navigationOptions = {
    title: 'Избранное',
    drawerIcon: ({ tintColor }) => (<Icon name="ios-star" style={{ color: tintColor }} />)
  }

  render() {

    return (
      <Container>

        <Header style={{ backgroundColor: 'white' }}>
          <DrawerButton navigation={this.props.navigation} />
          <Body>
            <Text>Избранное</Text>
          </Body>
        </Header>

        <Content contentContainerStyle={styles.container}>
          <Text>Favorite Screen</Text>
        </Content>
      </Container>

    );
  }
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
});