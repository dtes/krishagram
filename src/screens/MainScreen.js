import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Body,
  Icon,
  Left,
  Right,
} from 'native-base';
import { DrawerButton } from '../components/StatelessComponents';
import ListItem from '../components/ListItem';
import { items } from '../data';
import * as krishaApi from '../krishApi';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Consts';


class MainScreen extends Component {

  state = {
    loading: true,
    refreshing: false,
    loadingMore: false,
    page: 1,
    items: [],
  }

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    krishaApi
      .list({ page: this.state.page })
      .then(result => {
        // console.log({ result })
        this.setState({
          items: this.state.refreshing ? result : [...this.state.items, ...result],
          loading: false,
          // loadingMore: false,
          refreshing: false,
        })
      });
  }

  openSearch = () => {
    this.props.navigation.navigate('SearchScreen')
  }

  keyExtractor = (item, idx) => item.id + '';

  renderItem = ({ item }) => (
    <ListItem item={item} onOpen={this.onOpen} />
  )

  renderFooter = () => (
    <View>
      {this.state.loadingMore ?
        <ActivityIndicator style={{ paddingVertical: 15 }} size="large" />
        : null
      }
    </View>
  )

  loadMore = () => {
    this.setState({
      page: this.state.page + 1,
      loadingMore: true,
      // loading: true,
    }, () => {
      setTimeout(() => this.loadItems(), 200);
    })
  }

  onRefresh = () => {
    this.setState({
      page: 1,
      refreshing: true,
    }, () => {
      this.loadItems();
    })
  }

  onOpen = (item) => {
    this.props.navigation.navigate('DetailsScreen', { item })
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

          {this.state.loading ?
            (
              <ImageBackground
                style={{ flex: 1, width: SCREEN_WIDTH }}
                source={require('../../assets/img/mask-item.png')}>
                <ActivityIndicator
                  style={this.state.loadingMore ? null : styles.spinner}
                  size="large"
                />
              </ImageBackground>
            )
            : null
          }

          <FlatList
            style={{ flex: 1 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={this.state.items}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            ListFooterComponent={this.renderFooter}
            onEndReached={this.loadMore}
            onRefresh={this.onRefresh}
            refreshing={this.state.refreshing}
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
    justifyContent: 'center',
    // paddingTop: 10,
  },
  title: {
    padding: 5,
    fontSize: 16,
    // backgroundColor: '#eee',
    // borderRadius: 3,
    // marginLeft: 5,
  },
  spinner: {
    ...StyleSheet.absoluteFill,
    paddingVertical: 15,
  },
});
