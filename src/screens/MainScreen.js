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
  Button,
  Title,
} from 'native-base';
import { DrawerButton } from '../components/StatelessComponents';
import ListItem from '../components/ListItem';
import { items } from '../data';
import * as krishaApi from '../krishApi';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Consts';


class MainScreen extends Component {

  state = {
    title: 'Все объекты',
    loading: true,
    refreshing: false,
    loadingMore: false,
    page: 1,
    items: [],
    params: {}
  }

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    krishaApi
      .list({ page: this.state.page, ...this.state.params })
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

  loadMore = () => {
    this.setState({
      page: this.state.page + 1,
      loadingMore: true,
      // loading: true,
    }, () => {
      setTimeout(() => this.loadItems(), 200);
    })
  }

  keyExtractor = (item, idx) => item.id + '';

  renderItem = ({ item }) => (
    <ListItem item={item} onShow={this.onShow} />
  )

  renderFooter = () => (
    <View>
      {this.state.loadingMore ?
        <ActivityIndicator style={{ paddingVertical: 15 }} size="large" />
        : null
      }
    </View>
  )

  renderEmptyComponent = () => (
    <ImageBackground
      resizeMode="contain"
      style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
      source={require('../../assets/img/mask-item.png')}>
    </ImageBackground>
  )

  openSearch = () => {
    this.props.navigation.navigate('SearchScreen', { onSearch: this.onSearch })
  }

  onRefresh = () => {
    this.setState({
      page: 1,
      refreshing: true,
    }, () => {
      this.loadItems();
    })
  }

  onShow = (item) => {
    this.props.navigation.navigate('DetailsScreen', { item })
  }

  onSearch = (params) => {
    this.setState({
      items: [],
      page: 1,
      params,
      loading: true,
      title: params.title,
    });

    this.loadItems();
  }

  render() {

    return (
      <Container>
        <Header style={{ backgroundColor: 'white' }}>
          <DrawerButton navigation={this.props.navigation} />
          <Body>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              {this.state.title.split(' ').map(text => (
                <Text style={styles.title} key={text}>{text}</Text>
              ))}
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
            <ActivityIndicator style={this.state.loadingMore ? null : styles.spinner} size="large" />
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
            ListEmptyComponent={this.renderEmptyComponent}
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
  },
  spinner: {
    ...StyleSheet.absoluteFill,
    paddingVertical: 15,
    zIndex: 10
  },
});
