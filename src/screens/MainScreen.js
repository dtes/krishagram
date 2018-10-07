import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, StatusBar } from 'react-native';
import { Container, Content, Header, Body, Icon, Left, Right } from 'native-base';
import { DrawerButton } from '../components/SimpleComponents';
import ListItem from '../components/ListItem';


const items = [
  {
    id: 0,
    title: '9-комн - 266м² - 10 сот.',
    price: '170 000 000 ₸',
    address: 'Домалак ана 23, Алматинский р-н, Астана',
    viewCount: 120,
    dtPublic: '4 часа назад',
    favorite: true,
    images: [
      { source: require('../../assets/img/house11.png') },
      { source: require('../../assets/img/house12.png') },
      { source: require('../../assets/img/house13.png') },
      { source: require('../../assets/img/house14.png') },
    ]
  },
  {
    id: 1,
    title: '9-комн - 180м² - 12 сот.',
    price: '80 000 000 ₸',
    address: 'Е.Досматов 11/2, Байконырский р-н, Астана',
    viewCount: 56,
    dtPublic: 'Вчера',
    favorite: false,
    images: [
      { source: require('../../assets/img/house21.png') },
      { source: require('../../assets/img/house22.png') },
      { source: require('../../assets/img/house23.png') },
    ]
  }
];

class MainScreen extends Component {

  openSearch = () => {
    this.props.navigation.navigate('SearchScreen')
  }

  keyExtractor = (item, idx) => item.id + '';

  renderItem = ({ item }) => (
    <ListItem item={item}/>
  )

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
          <StatusBar backgroundColor='yellow' barStyle='dark-content' />

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
    alignItems: 'stretch'
  },
  title: {
    padding: 5,
    fontSize: 16,
    // backgroundColor: '#eee',
    // borderRadius: 3,
    // marginLeft: 5,
  }
});
