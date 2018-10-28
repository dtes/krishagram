import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, Animated, Alert, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'native-base';
import Swiper from 'react-native-swiper';
import { months } from '../data';
import { ITEM_WIDTH, ITEM_HEIGHT, ITEM_PHOTO_HEIGHT } from '../Consts';

const DEFAULT_PHOTO = '../../assets/img/mask-item.png'

class ListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  showDetails = () => {
    if (this.props.onOpen) {
      this.props.onOpen(this.props.item)
    }
  }

  getTitle = (item) => {
    switch (item.service_data.cat_id) {
      case 1:
      case 2:
        return `${item.data['live.rooms']}-комн - ${item.data['live.square']} м² - ${item.data['house.floor_num']} этажей`
      case 3:
        return `${item.data['live.rooms']}-комн - ${item.data['live.square']} м² - ${item.data['land.square']} сот`
      case 14:
        let unit = item.data['land.square_au'] == 2 ? 'сот' : 'га';
        return `Участок ${item.data['land.square_a']} ${unit}`
      case 12:
        return `Офис площадью ${item.data['com.square']}`
      case 44:
      case 45:
        return `Помещение площадью ${item.data['com.square']}`
      case 11:
        return `Магазин площадью ${item.data['com.square']}`
      case 17:
      case 18:
        return item.data['title']
      case 7:
        return `Здание площадью ${item.data['com.square']}`
      case 5:
        return `Дача с участком ${item.data['land.square']} сот`
      case 16:
        return 'Склад или промбаза'
      case 9:
        return `${item.data['live.rooms']} комнаты - ${item.data['live.square']} м²`
      default:
        return 'Название не опр.'
    }
  }

  getPrice = (item) => {
    let parts = item.data.price.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".") + ' ₸'
  }

  getAddress = (item) => {
    let city = item.data['map.city']
    let district = item.data['map.district']
    let street = item.data['map.street']
    let geoText = item.data['map.geo_text']
    return city && district && street ? `${city}, ${district}, ул. ${street}` : geoText
  }

  getDtPublic = (item) => {
    let dt = new Date(item.service_data.published_at);
    return `${dt.getDate()} ${months[dt.getMonth() + 1]}`
  }

  render() {
    let photos = this.props.item.Files || {}

    return (
      <View style={{ height: ITEM_HEIGHT }}>

        <View style={{ height: ITEM_PHOTO_HEIGHT }}>

          {/* Photo Carousel */}
          <Swiper
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            paginationStyle={styles.pagination}
            loop={false}
          >
            {/* render photos */}
            {Object.keys(photos).splice(0, 5).map((key, idx) => {
            // {Object.keys(photos).map((key, idx) => {
              let uri = photos[key].path.replace('full', '400x300')
              return (
                <View key={idx} style={styles.slide}>
                  <Image
                    style={styles.image}
                    source={{ uri }}
                    resizeMode='cover'
                  />
                </View>
              )
            }
            )}
          </Swiper>
        </View>

        <TouchableWithoutFeedback onPress={this.showDetails}>
          <View style={{ paddingBottom: 10, paddingHorizontal: 15 }}>
            <View style={styles.titleRow0}>
              {/* Icons */}
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={this.props.item.favorite ? 'star' : 'star-o'} type='FontAwesome' style={styles.icon} />
                <Icon name='eye' type='FontAwesome' style={styles.icon} />
                <Text>{Math.round(Math.random() * 350)}</Text>
              </View>
              {/* Public date */}
              <Text style={{ fontWeight: 'bold' }}>{this.getDtPublic(this.props.item)}</Text>
            </View>

            <View style={styles.titleRow1}>
              <Text style={styles.title}>{this.getTitle(this.props.item)}</Text>
              <Text style={styles.price}>{this.getPrice(this.props.item)}</Text>
            </View>
            <View style={styles.titleRow2}>
              <Text style={styles.address}>{this.getAddress(this.props.item)}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

      </View>

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
    width: ITEM_WIDTH,
    height: ITEM_PHOTO_HEIGHT
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
    backgroundColor: 'rgba(150,150,150,.5)',
    width: 6,
    height: 6,
    borderRadius: 7,
    marginHorizontal: 4
  },
  activeDot: {
    backgroundColor: '#469fcc',
    width: 7,
    height: 7,
    borderRadius: 7,
    marginHorizontal: 4
  },
  pagination: {
    bottom: -20
  }
});
