import React, { PureComponent } from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import { Icon, Picker, Item } from 'native-base';
import TextInputFromTo from '../inputs/TextInputFromTo';
import PickerYesNo from '../inputs/PickerYesNo';
import RoomCount from '../inputs/RoomCount';
import { styles } from './styles';
import { operationTypes, objectTypes, buildingTypes, toiletTypes } from '../../dicts'
import { renovationType, rentPeriod, furnitureType, flatPhoneType, inetType } from '../../krishApi';


class FlatFilters extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const isSell = this.props.isSell
    const isRent = !isSell

    return (
      <View>
        {/* Rent period */}
        {isRent ?
          <View style={styles.inputSection}>
            <Text>Период аренды</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ flex: 1 }}
                selectedValue={this.state.selectedRentPeriodType}
                onValueChange={(val) => { this.setState({ selectedRentPeriodType: val }) }}
              >
                {Object.keys(rentPeriod).map(key => (
                  <Picker.Item label={rentPeriod[key]} value={key} key={key} />
                ))}
              </Picker>
            </Item>
          </View> : null
        }

        {/* Room counts */}
        <View style={styles.inputSection}>
          <RoomCount onValueChange={(roomCounts) => this.setState({ selectedRoomCounts: roomCounts })} />
        </View>

        {/* Price */}
        <View style={styles.inputSection}>
          <TextInputFromTo title="Цена" keyboardType='numeric' />
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
        {isSell ?
          <View style={styles.inputSectionRow}>
            <Text style={{ flex: 1, color: 'black' }}>От проверенных агенств</Text>
            <Switch
              value={this.state.fromTrustedAgency}
              onValueChange={(val) => { this.setState({ fromTrustedAgency: val }) }}
            />
          </View> : null
        }

        {/* Hot variants */}
        <View style={styles.inputSectionRow}>
          <Text style={{ flex: 1, color: 'black' }}>Горячие</Text>
          <Switch
            value={this.state.isHot}
            onValueChange={(val) => { this.setState({ isHot: val }) }}
          />
        </View>

        {/* Furniture type */}
        {isRent ?
          <View style={styles.inputSection}>
            <Text>Мебель</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ flex: 1 }}
                selectedValue={this.state.selectedFurnitureType}
                onValueChange={(val) => { this.setState({ selectedFurnitureType: val }) }}
              >
                {Object.keys(furnitureType).map(key => (
                  <Picker.Item label={furnitureType[key]} value={key} key={key} />
                ))}
              </Picker>
            </Item>
          </View> : null
        }

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
              {buildingTypes.map((type) => (
                <Picker.Item label={type.name} value={type.id} key={type.id} />
              ))}
            </Picker>
          </Item>
        </View>

        {/* Renovation type */}
        {isRent ?
          <View style={styles.inputSection}>
            <Text>Состояние</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ flex: 1 }}
                selectedValue={this.state.selectedRenovationType}
                onValueChange={(val) => this.setState({ selectedRenovationType: val })}
              >
                {Object.keys(renovationType).map((key) => (
                  <Picker.Item label={renovationType[key]} value={key} key={key} />
                ))}
              </Picker>
            </Item>
          </View> : null
        }

        {/* Phone type */}
        <View style={styles.inputSection}>
          <Text>Телефон</Text>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ flex: 1 }}
              selectedValue={this.state.selectedFlatPhoneType}
              onValueChange={(val) => this.setState({ selectedFlatPhoneType: val })}
            >
              {Object.keys(flatPhoneType).map(key => (
                <Picker.Item label={flatPhoneType[key]} value={key} key={key} />
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
        {isSell ?
          <View style={styles.inputSection}>
            <Text></Text>
            <TextInputFromTo title="Год постройки" keyboardType='numeric' />
          </View> : null
        }

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
              {buildingTypes.map((type) => (
                <Picker.Item label={type.name} value={type.id} key={type.id} />
              ))}
            </Picker>
          </Item>
        </View>

        {/* InetType */}
        {isRent ?
          <View style={styles.inputSection}>
            <Text>Интернет</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ flex: 1 }}
                selectedValue={this.state.selectedInetType}
                onValueChange={(val) => { this.setState({ selectedInetType: val }) }}
              >
                {Object.keys(inetType).map(key => (
                  <Picker.Item label={inetType[key]} value={key} key={key} />
                ))}
              </Picker>
            </Item>
          </View> : null
        }

        {/* ToiletType */}
        <View style={styles.inputSection}>
          <Text>Санузел</Text>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ flex: 1 }}
              selectedValue={this.state.selectedToiletType}
              onValueChange={(val) => { this.setState({ selectedToiletType: val }) }}
            >
              {toiletTypes.map((type) => (
                <Picker.Item label={type.name} value={type.id} key={type.id} />
              ))}
            </Picker>
          </Item>
        </View>

        {/* Zalog */}
        {isSell ?
          <View style={styles.inputSection}>
            <PickerYesNo title="В залоге" />
          </View> : null
        }

        {/* В приватизированном общежитии */}
        <View style={styles.inputSection}>
          <PickerYesNo title="В приватизированном общежитии" />
        </View>

        {/* Bargaining possible */}
        {isSell ?
          <View style={styles.inputSectionRow}>
            <Text style={{ flex: 1, color: 'black' }}>Возможен обмен</Text>
            <Switch
              value={this.state.bargainingPossible}
              onValueChange={(val) => { this.setState({ bargainingPossible: val }) }}
            />
          </View> : null
        }

        {/* Advertise Text */}
        <View style={styles.inputSection}>
          <Text>Текст объявления</Text>
          <TextInput style={styles.priceInput} />
        </View>

      </View>
    );
  }
}

export default FlatFilters;
