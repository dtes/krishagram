import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Container, Content, Header, Left, Right, Body, Icon, Button } from 'native-base';
import ListItem from '../components/ListItem';
import { items } from '../data';
import { Fields } from '../components/SimpleComponents';
import * as krishaApi from '../krishApi';


class DetailsScreen extends Component {
  static navigationOptions = {
    drawerLockMode: 'locked-open',
  }

  componentDidMount() {
    // let id = this.props.navigation.getParam('id')

    // krishaApi
    //   .item(id)
    //   .then(item => this.setState({
    //     isLoading: false,
    //     item,
    //   }))
  }

  render() {
    // const id = this.props.navigation.getParam('id');
    // const item = items.find((item) => item.id == id)
    const item = this.props.navigation.getParam('item');

    return (
      <Container>

        <Content contentContainerStyle={{ flex: 1 }}>
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {/* Header */}
            <View style={styles.header}>
              <Icon name="md-arrow-back"
                style={styles.arrowBack}
                onPress={() => this.props.navigation.goBack()}
              />
            </View>

            {/* Photos */}
            <ListItem item={item} />

            {/* Fields */}
            <Fields fields={krishaApi.getFields(item)} style={{ paddingHorizontal: 15 }} />

            {/* Description */}
            <View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
              <Text style={{ color: 'black' }}>{item.data.text}</Text>
            </View>

            <View style={{ height: 70 }}></View>
          </ScrollView>

          {/* Fixed buttons */}
          <View style={styles.buttonContainer}>
            <Button style={styles.button}><Icon name="comment-o" type='FontAwesome' style={styles.buttonIcon} /></Button>
            <Button style={styles.button}><Icon name="phone" type='FontAwesome' style={styles.buttonIcon} /></Button>
          </View>

        </Content>
      </Container>
    );
  }
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    zIndex: 100
  },
  arrowBack: {
    color: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  button: { width: 60, height: 60, borderRadius: 30, marginLeft: 20, justifyContent: 'center' },
  buttonIcon: { color: 'white' },
  buttonContainer: { position: 'absolute', bottom: 20, right: 20, flexDirection: 'row' },
});
