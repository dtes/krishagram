import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Container, Content, Header, Left, Right, Body, Icon } from 'native-base';
import ListItem from '../components/ListItem';
import { items } from '../data';

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const id = this.props.navigation.getParam('id');
    const item = items.find((item) => item.id == id)

    return (
      <Container>

        <Content>
          <View style={styles.container}>
            <View style={{ position: 'absolute', zIndex: 100 }}>
              <Icon name="md-arrow-back"
                style={styles.arrowBack}
                onPress={() => this.props.navigation.goBack()}
              />
            </View>

            <ListItem item={item} />
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
  arrowBack: {
    color: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 10,
  }
})