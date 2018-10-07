import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, StatusBar } from 'react-native';
import { Container, Content, Header, Body, Icon, Left, Right } from 'native-base';
import { DrawerButton } from '../components/SimpleComponents';
import ListItem from '../components/ListItem';
import { items } from '../data';


class MainScreen extends Component {

  openSearch = () => {
    this.props.navigation.navigate('SearchScreen')
  }

  keyExtractor = (item, idx) => item.id + '';

  renderItem = ({ item }) => (
    <ListItem item={item} onOpen={this.onOpen} />
  )

  onOpen = (id) => {
    this.props.navigation.navigate('DetailsScreen', { id })
  }

  render() {

    return (
      <Container>
        <Header style={{ backgroundColor: 'white' }}>
          <DrawerButton navigation={this.props.navigation} />
          <Body>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={styles.title}>Продажа</Text>
              <Text style={styles.title}>Дома</Text>
            </View>
          </Body>
          <Right>
            <Icon
              name="ios-search"
              style={{ padding: 8 }}
              onPress={this.openSearch}
            />
          </Right>
        </Header>

        <Content contentContainerStyle={styles.container}>

          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={items}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </Content>
      </Container>
    );
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  title: {
    padding: 5,
    fontSize: 16,
    // backgroundColor: '#eee',
    // borderRadius: 3,
    // marginLeft: 5,
  }
});
