import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Button, TextInput, Switch } from 'react-native';
import { Container, Content, Header, Left, Body, Icon, Form, Picker, Item } from 'native-base';
import TextInputFromTo from '../components/inputs/TextInputFromTo';
import PickerYesNo from '../components/inputs/PickerYesNo';
import RoomCount from '../components/inputs/RoomCount';
import { styles } from '../components/search/styles';
import { operationTypes, objectTypes, buildingTypes, toiletTypes } from '../dicts'
import FlatFilters from '../components/search/flatFilters';
import HouseFilters from '../components/search/houseFilters';
import CountryHouseFilters from '../components/search/countryHouseFilters';
import LandFilters from '../components/search/landFilters';
import OfficeFilters from '../components/search/officeFilters';
import OtherFilters from '../components/search/otherFilters';
import QuartersFilters from '../components/search/quartersFilters';
import BuildingFilters from '../components/search/buildingFiltesr';
import MarketFilters from '../components/search/marketFilters';
import WarehouseFilters from '../components/search/warehouseFilters';
import { category, CAT_ID_KEY } from '../krishApi';


class SearchScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedObjectType: 1,
      selectedOperationType: 1,
      formData: {},
    }
  }

  renderFilters = () => {
    const isSell = this.state.selectedOperationType == 1
    const props = { isSell }

    if (this.state.selectedObjectType == 1) {
      return (<FlatFilters {...props} />)
    } else if (this.state.selectedObjectType == 2) {
      return (<HouseFilters {...props} />)
    } else if (this.state.selectedObjectType == 3) {
      return (<CountryHouseFilters {...props} />)
    } else if (this.state.selectedObjectType == 4) {
      return (<LandFilters {...props} />)
    } else if (this.state.selectedObjectType == 5) {
      return (<OfficeFilters {...props} />)
    } else if (this.state.selectedObjectType == 6) {
      return (<QuartersFilters {...props} />)
    } else if (this.state.selectedObjectType == 7) {
      return (<BuildingFilters {...props} />)
    } else if (this.state.selectedObjectType == 8) {
      return (<MarketFilters {...props} />)
    } else if (this.state.selectedObjectType == 9) {
      return (<WarehouseFilters {...props} />)
    } else if (this.state.selectedObjectType == 10) {
      return (<OtherFilters {...props} />)
    }

    return null;
  }

  getCategory = () => {
    let objectType = this.state.selectedObjectType;
    let operationType = this.state.selectedOperationType
    let isSell = operationType == 1
    let catId

    if (objectType == 1) {
      catId = isSell ? category.flatSell : category.flatRent
    } else if (objectType == 2) {
      catId = isSell ? category.houseSell : category.houseRent
    } else if (objectType == 3) {
      catId = isSell ? category.countryHouseSell : category.countryHouseRent
    } else if (objectType == 4) {
      catId = category.landSell
    } else if (objectType == 5) {
      catId = isSell ? category.officeSell : category.officeRent
    } else if (objectType == 6) {
      catId = isSell ? category.quartersSell : category.quartersRent
    } else if (objectType == 7) {
      catId = isSell ? category.buildingSell : category.buildingRent
    } else if (objectType == 8) {
      catId = isSell ? category.marketSell : category.marketRent
    } else if (objectType == 9) {
      catId = isSell ? category.warehouseSell : category.warehouseRent
    } else if (objectType == 10) {
      catId = isSell ? category.otherSell : category.otherRent
    }

    return catId
  }

  search = () => {
    let onSearch = this.props.navigation.getParam('onSearch')
    let params = {}
    let objectType = this.state.selectedObjectType;
    let operationType = this.state.selectedOperationType
    let isSell = operationType == 1

    let catId = this.getCategory()
    if (catId) params[CAT_ID_KEY] = catId
    
    let title = '';
    title += operationTypes.find(item => item.id == operationType).name;
    title += ' '
    title += objectTypes.find(item => item.id == objectType).name;
    params['title'] = title

    this.props.navigation.goBack();
    onSearch(params);
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'white' }}>
          <Left>
            <Icon name="md-arrow-back" onPress={() => this.props.navigation.goBack()} />
          </Left>
          <Body><Text style={{ fontSize: 16 }}>Поиск</Text></Body>
        </Header>

        <Content contentContainerStyle={{ flex: 1 }}>

          <Form style={{ flex: 1 }}>

            <ScrollView style={{ paddingHorizontal: 10 }} showsVerticalScrollIndicator={false}>

              {/* Select operation and object types */}
              <View style={styles.inputSectionRow}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      style={{ flex: 1 }}
                      placeholder="Выберите тип операции"
                      selectedValue={this.state.selectedOperationType}
                      onValueChange={(val) => { this.setState({ selectedOperationType: val }) }}
                    >
                      {operationTypes.map((type) => (
                        <Picker.Item label={type.name} value={type.id} key={type.id} />
                      ))}
                    </Picker>
                  </Item>
                </View>

                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      style={{ flex: 1 }}
                      placeholder="Выберите тип объекта"
                      selectedValue={this.state.selectedObjectType}
                      onValueChange={(val) => { this.setState({ selectedObjectType: val }) }}
                    >
                      {objectTypes.map((type) => (
                        <Picker.Item label={type.name} value={type.id} key={type.id} />
                      ))}
                    </Picker>
                  </Item>
                </View>
              </View>

              {this.renderFilters()}

              <View style={{ height: 55 }}></View>

            </ScrollView>

          </Form>

          {/* Search Button */}
          <View style={{ height: 55, bottom: 0, left: 0, paddingHorizontal: 10 }}>
            <Button
              title="Поиск"
              onPress={this.search}
            />
          </View>

        </Content>
      </Container>
    );
  }
}

export default SearchScreen;
