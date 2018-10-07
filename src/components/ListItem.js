import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated, Alert, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'native-base';
import Swiper from 'react-native-swiper';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const width = SCREEN_WIDTH + 1;
const height = 325;
const photoHeight = 230;

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    this.itemHeight = new Animated.Value(height);
  }

  showDetails = () => {
    this.opened = !this.opened;
    Animated.timing(this.itemHeight, {
      toValue: this.opened ? SCREEN_HEIGHT : height,
      duration: 300
    }).start();
  }

  render() {
    return (
      <Animated.View style={[{ height: this.itemHeight }, ]}>

        <View style={{ height: photoHeight }}>

          {/* Photo Carousel */}
          <Swiper
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            paginationStyle={styles.pagination}
            loop={false}
          >
            {this.props.item.images.map((image, idx) => (
              <View key={idx} style={styles.slide}>
                <Image
                  style={styles.image}
                  source={image.source}
                  resizeMode='cover'
                />
                <Text>{image.url}</Text>
              </View>
            ))}
          </Swiper>
        </View>

        <TouchableWithoutFeedback onPress={this.showDetails}>
          <View style={{ paddingBottom: 10, paddingHorizontal: 15 }}>
            <View style={styles.titleRow0}>
              {/* Icons */}
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={this.props.item.favorite ? 'star' : 'star-o'} type='FontAwesome' style={styles.icon} />
                <Icon name='eye' type='FontAwesome' style={styles.icon} />
                <Text>{this.props.item.viewCount}</Text>
              </View>
              {/* Public date */}
              <Text style={{ fontWeight: 'bold' }}>{this.props.item.dtPublic}</Text>
            </View>

            <View style={styles.titleRow1}>
              <Text style={styles.title}>{this.props.item.title}</Text>
              <Text style={styles.price}>{this.props.item.price}</Text>
            </View>
            <View style={styles.titleRow2}>
              <Text style={styles.address}>{this.props.item.address}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

      </Animated.View>

    );
  }
}

export default ListItem;

const styles = StyleSheet.create({
  icon: {
    color: '#666',
    textAlign: 'center',
    marginRight: 10,
    fontSize: 19,
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
  },
  image: {
    width,
    height: photoHeight
  },
  titleRow0: {
    paddingTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleRow1: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleRow2: {
    paddingTop: 5,
  },
  price: {
    fontWeight: 'bold'
  },
  title: {
    color: 'rgb(160, 47, 24)',
    fontWeight: 'bold'
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,.5)',
    width: 6,
    height: 6,
    borderRadius: 7,
    marginHorizontal: 4
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 7,
    marginHorizontal: 4
  },
  pagination: {
    bottom: 10
  }
});
