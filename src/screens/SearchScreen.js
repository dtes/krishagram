import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Button, TextInput, Switch } from 'react-native';
import { Container, Content, Header, Left, Body, Icon, Form, Picker, Item } from 'native-base';
import TextInputFromTo from '../components/inputs/TextInputFromTo';
import PickerYesNo from '../components/inputs/PickerYesNo';
import RoomCount from '../components/inputs/RoomCount';


class SearchScreen extends Component {

  operationTypes = [
    { id: 1, name: 'Продажа' },
    { id: 2, name: 'Аренда' },
  ];

  objectTypes = [
    { id: 1, name: 'Квартиры' },
    { id: 2, name: 'Дома' },
    { id: 3, name: 'Дачи' },
    { id: 4, name: 'Участки' },
    { id: 5, name: 'Офисы' },
    { id: 6, name: 'Помощения' },
    { id: 7, name: 'Здания' },
    { id: 8, name: 'Магазины, бутики' },
    { id: 9, name: 'Промбазы, склады, заводы' },
    { id: 10, name: 'Прочая невдижимость' },
  ];

  buildingTypes = [
    { id: 1000, name: 'Не важно' },
    { id: 1, name: 'кирпичный' },
    { id: 2, name: 'панелный' },
    { id: 3, name: 'монолитный' },
    { id: 4, name: 'каркасно-камышитовый' },
    { id: 5, name: 'иное' },
  ];

  bathroomTypes = [
    { id: 1000, name: 'Не важно' },
    { id: 1, name: 'раздельный' },
    { id: 2, name: 'совмещенный' },
    { id: 3, name: '2 с/у и более' },
    { id: 4, name: 'нет' },
  ];


  constructor(props) {
    super(props);

    this.state = {
      operation: 'Продажа',
      objectType: 'Квартира',
      isSail: true,
      selectedObjectType: 1,
      formData: {},
    }
  }

  toggleOperation = () => {
    this.setState((state) => {
      let isSail = !state.isSail;
      return {
        isSail: isSail,
        operation: isSail ? 'Продажа' : 'Аренда',
      }
    })
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
                      {this.operationTypes.map((type) => (
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
                      {this.objectTypes.map((type) => (
                        <Picker.Item label={type.name} value={type.id} key={type.id} />
                      ))}
                    </Picker>
                  </Item>
                </View>
              </View>

              {/* Room counts */}
              <View style={styles.inputSection}>
                <RoomCount onValueChange={(roomCounts) => this.setState({ selectedRoomCounts: roomCounts })} />
              </View>

              {/* Price */}
              <View style={styles.inputSection}>
                <TextInputFromTo title="Цена" keyboardType='numeric'/>
              </View>

              {/* From owner */}
              <View style={styles.inputSectionRow}>
                <Text style={{ flex: 1, color: 'black' }}>От хозяев</Text>
                <Switch
                  value={this.state.isOwner}
                  onValueChange={(val) => { this.setState({ isOwner: val }) }}
                />
              </View>

              {/* From trusted agencies */}
              <View style={styles.inputSectionRow}>
                <Text style={{ flex: 1, color: 'black' }}>От проверенных агенств</Text>
                <Switch
                  value={this.state.fromTrustedAgency}
                  onValueChange={(val) => { this.setState({ fromTrustedAgency: val }) }}
                />
              </View>

              {/* Hot variants */}
              <View style={styles.inputSectionRow}>
                <Text style={{ flex: 1, color: 'black' }}>Горячие</Text>
                <Switch
                  value={this.state.isHot}
                  onValueChange={(val) => { this.setState({ isHot: val }) }}
                />
              </View>

              {/* Building type */}
              <View style={styles.inputSection}>
                <Text>Тип строения</Text>
                <Item picker>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ flex: 1 }}
                    selectedValue={this.state.selectedBuildingType}
                    onValueChange={(val) => { this.setState({ selectedBuildingType: val }) }}
                  >
                    {this.buildingTypes.map((type) => (
                      <Picker.Item label={type.name} value={type.id} key={type.id} />
                    ))}
                  </Picker>
                </Item>
              </View>

              {/* Building level */}
              <View style={styles.inputSection}>
                <TextInputFromTo title="Этаж" keyboardType='numeric' />
              </View>

              {/* Total square */}
              <View style={styles.inputSection}>
                <TextInputFromTo title="Общая площадь" keyboardType='numeric' />
              </View>

              {/* Live square */}
              <View style={styles.inputSection}>
                <TextInputFromTo title="Жилая площадь" keyboardType='numeric' />
              </View>

              {/* Kitchen square */}
              <View style={styles.inputSection}>
                <TextInputFromTo title="Площадь кухни" keyboardType='numeric' />
              </View>

              {/* Year */}
              <View style={styles.inputSection}>
                <Text></Text>
                <TextInputFromTo title="Год постройки" keyboardType='numeric' />
              </View>

              {/* Complex */}
              <View style={styles.inputSection}>
                <Text>Жилой комплекс</Text>
                <Item picker>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ flex: 1 }}
                    selectedValue={this.state.selectedBuildingType}
                    onValueChange={(val) => { this.setState({ selectedBuildingType: val }) }}
                  >
                    {this.buildingTypes.map((type) => (
                      <Picker.Item label={type.name} value={type.id} key={type.id} />
                    ))}
                  </Picker>
                </Item>
              </View>

              {/* BathroomType */}
              <View style={styles.inputSection}>
                <Text>Санузел</Text>
                <Item picker>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ flex: 1 }}
                    selectedValue={this.state.selectedBathroomType}
                    onValueChange={(val) => { this.setState({ selectedBathroomType: val }) }}
                  >
                    {this.bathroomTypes.map((type) => (
                      <Picker.Item label={type.name} value={type.id} key={type.id} />
                    ))}
                  </Picker>
                </Item>
              </View>

              {/* Zalog */}
              <View style={styles.inputSection}>
                <PickerYesNo title="В залоге" />
              </View>

              {/* В приватизированном общежитии */}
              <View style={styles.inputSection}>
                <PickerYesNo title="В приватизированном общежитии" />
              </View>

              {/* Bargaining possible */}
              <View style={styles.inputSectionRow}>
                <Text style={{ flex: 1, color: 'black' }}>Возможен обмен</Text>
                <Switch
                  value={this.state.bargainingPossible}
                  onValueChange={(val) => { this.setState({ bargainingPossible: val }) }}
                />
              </View>

              {/* Advertise Text */}
              <View style={styles.inputSection}>
                <Text>Текст объявления</Text>
                <TextInput style={styles.priceInput} />
              </View>

              <View style={{ height: 55 }}></View>

            </ScrollView>

          </Form>

          {/* Search Button */}
          <View style={{ height: 55, bottom: 0, left: 0, paddingHorizontal: 10 }}>
            <Button
              title="Поиск"
              onPress={() => { }}
            />
          </View>

        </Content>
      </Container>
    );
  }
}

export default SearchScreen;

const styles = StyleSheet.create({
  inputSection: {
    marginTop: 5,
    paddingVertical: 5,
  },
  inputSectionRow: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  priceInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 3,
  },
});
