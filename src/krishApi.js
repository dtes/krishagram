const APP_ID = "692883556464"
const APP_KEY = "52df8c7e62b109b773431c16310f38f2"
const LIMIT = 20;

const URL_SEARCH = `https://api.krisha.kz/v1/adverts/search.json?storageId=live&appId=${APP_ID}&appKey=${APP_KEY}&limit=${LIMIT}&query[system_data][hasphoto]=1`
const URL_LIST = `https://api.krisha.kz/v1/adverts/getMany.json?appId=${APP_ID}&appKey=${APP_KEY}`
const URL_ITEM = `https://api.krisha.kz/v1/adverts/getOne.json?appId=${APP_ID}&appKey=${APP_KEY}`

// search params
export const CAT_ID_KEY = "catId"
export const PRICE_FROM = "query[data][_price.srch][from]"
export const PRICE_TO = "query[data][_price.srch][to]"
export const LIVE_ROOMS_FROM = "query[data][live.rooms][from]";
export const LIVE_ROOMS_TO = "query[data][live.rooms][to]";
export const TEXT = "text"
export const FROM_WHO = "query[data][who]" // 1-owner, 2-agency, 3-company
export const CHECKED_AGENCIES = "query[data][checked]"
export const PRICE_CURRENCY = "query[data][price.currency]"
export const TOP_LEFT = "query[data][map.location][geo_bounding_box][top_left]"
export const BOTTOM_RIGHT = "query[data][map.location][geo_bounding_box][bottom_right]"


//
export const category = {
  flatSell: 1,
  flatRent: 2,
  houseSell: 3,
  houseRent: 4,
  countryHouseSell: 5,
  countryHouseRent: 6,
  buildingSell: 7,
  buildingRent: 8,
  roomRent: 9,
  marketSell: 10,
  marketRent: 11,
  officeSell: 12,
  officeRent: 13,
  landSell: 14,
  warehouseSell: 15,
  warehouseRent: 16,
  otherSell: 17,
  otherRent: 18,
  takeRent: 43,
  quartersSell: 44,
  quartersRent: 45,
}

// Dicts
export const renovationType = {
  "1": "хорошее",
  "2": "среднее",
  "3": "евроремонт",
  "4": "требует ремонта",
  "5": "свободная планировка",
  "6": "черновая отделка",
  "10": "недостроено",
}

export const buildingType = {
  "-1": "Не важно",
  "1": "кирпичный",
  "2": "панельный",
  "3": "монолитный",
  "4": "каркасно-камышитовый",
  "5": "пеноблочный",
  "6": "сэндвич-панели",
  "7": "каркасно-щитовой",
  "8": "шлакоблочный",
  "9": "деревянный",
  "0": "иное",
}

export const officeType = {
  "1": "в бизнес-центре",
  "2": "в административном здании",
  "3": "в жилом доме",
  "4": "в коттедже",
  "5": "иное",
}

export const securityType = {
  "1": "решетки на окнах",
  "2": "охрана",
  "3": "домофон",
  "4": "кодовый замок",
  // "3": "пожарная сигнализация",
  "5": "круглосуточная охрана",
  "6": "видеонаблюдение",
  "8": "консьерж",
}

export const yesNo = {
  "0": "нет",
  "1": "да",
  "2": "нет",
}

export const rentPeriod = {
  "0": "Не важно",
  "1": "посуточно",
  "2": "помесячно",
  "3": "поквартально",
  "4": "по часам",
}

export const furnitureType = {
  "0": "Не важно",
  "1": "полностью меблирована",
  "2": "частично меблирована",
  "3": "пустая",
}

export const flatPhoneType = {
  "0": "Не важно",
  "1": "отдельный",
  "2": "блокиратор",
  "3": "есть возможность подключения",
  "4": "нет"
}

export const inetType = {
  "0": "Не важно",
  "1": "ADSL",
  "2": "через TV кабель",
  "3": "проводной",
  "4": "оптика",
}

export const heatingType = {
  "0": "Не важно",
  "1": "центральное",
  "2": "на газе",
  "3": "на твердом топливе",
  "4": "на жидком топливе",
  "5": "смешанное",
  "6": "без отопления",
}

export const sewageType = {
  "0": "Не важно",
  "1": "центральная",
  "2": "есть возможность подведения",
  "3": "септик",
  "4": "нет",
}

export const toiletType = {
  "0": "Не важно",
  "1": "раздельный",
  "2": "совмещенный",
  "3": "2 с.у и более",
  "4": "во дворе",
}

const fieldDefinitions = {
  "house.floor_num": {
    title: 'Количество уровней',
  },
  "live.square": {
    title: 'Площадь',
    siffix: ' м²',
  },
  "house.roof": {
    title: 'Покрытие крыши',
  },
  "land.fence": {
    title: 'Как огорожен участок',
  },
  "house.year": {
    title: 'Дом',
    suffix: ' г.п.',
  },
  "land.square": {
    title: 'Участок',
  },
  "ceiling": {
    title: 'Высота потолков',
    suffix: ' м',
  },
  "live.square_k": {
    title: 'Кухня',
    suffix: ' м²',
  },
  "cmtn.phone": {
    title: "Телефон",
    dict: {
      "0": "нет",
      "1": "есть",
      "2": "есть возможность подключения"
    },
  },
  "cmtn.sewage": {
    title: "Канализация",
    dict: sewageType,
  },
  "house.toilet": {
    title: "Санузел",
    dict: toiletType,
  },
  "cmtn.heating": {
    title: "Отопление",
    dict: heatingType,
  },
  "cmtn.electricity": {
    title: "Электричество",
    dict: {
      "1": "есть",
      "0": "нет",
    },
  },
  "house.renovation": {
    title: "Состояние",
    dict: renovationType,
  },
  "cmtn.water": {
    title: "Вода",
    dict: {
      "1": "центральное водоснабжение",
      "3": "скважина",
    },
  },
  "house.building": {
    title: "Тип стен",
    dict: buildingType,
  },
  "land.square_a": {
    title: "Площадь участка",
  },
  "land.earmarked": {
    title: "Целевое назначение",
  },
  "land.separable": {
    title: "Делимость",
    dict: {
      "1": "делимый",
      "2": "неделимый",
    },
  },
  "has_change": {
    title: "Возможен обмен",
    dict: {
      "0": "не интересует",
      "1": "возможен обмен",
    },
  },
  "com.communications": {
    title: "Коммуникации",
    multiple: true,
    dict: {
      "1": "свет",
      "2": "вода",
      "3": "газ",
      "4": "телефон",
      "5": "интернет",
      "6": "канализация",
      "7": "отопление",
    },
  },
  "inet.type": {
    title: "Интернет",
    dict: inetType,
  },
  "cmtn.gas": {
    title: "Газ",
    dict: {
      "1": "магистральный",
      "3": "есть возможность подключения",
    },
  },
  "flat.building": {
    title: "Тип стен",
    dict: buildingType,
  },
  "flat.renovation": {
    title: "Состояние",
    dict: renovationType,
  },
  "flat.balcony": {
    title: "Балкон",
    dict: {
      "1": "балкон",
      "2": "лоджия",
      "3": "балкон и лоджия",
    },
  },
  "flat.door": {
    title: "Дверь",
    dict: {
      "2": "металлическая",
    },
  },
  "flat.floor": {
    title: "Этаж",
  },
  "house.floor_num": {
    title: "Этажность",
  },
  "flat.priv_dorm": {
    title: "В приватизированном общежитии",
    dict: {
      "1": "да",
      "2": "нет",
    },
  },
  "flat.security": {
    title: "Безопасность",
    multiple: true,
    dict: securityType,
  },
  "flat.parking": {
    title: "Паркинг",
    dict: {
      "1": "паркинг",
      "3": "рядом охраняемая стоянка"
    },
  },
  "flat.flooring": {
    title: "Пол",
    dict: {
      "1": "линолеум",
      "3": "ламитнат",
      "4": "дерево",
    },
  },
  "flat.balcony_g": {
    title: "Балкон остеклен",
    dict: {
      "true": "да",
      "false": "нет",
    },
  },
  "flat.phone": {
    title: "Телефон",
    dict: flatPhoneType,
  },
  "flat.toilet": {
    title: "Санузел",
    dict: {
      "1": "раздельный",
      "2": "совмещенный",
      "3": "2 с.у. и более",
      "4": "нет",
    },
  },
  "map.complex": {
    title: "Жилой комплекс",
  },
  "live.furniture": {
    title: "Мебель",
    dict: furnitureType,
  },
  "com.rooms": {
    title: "Количество комнат",
  },
  "office.complex_name": {
    title: "Название бизнес центра",
  },
  "office.renovation": {
    title: "Состояние",
    dict: renovationType,
  },
  "com.security": {
    title: "Безопасность",
    multiple: true,
    dict: securityType,
  },
  "com.parking": {
    title: "Парковка",
  },
  "com.phonenum": {
    title: "Кол-во телефонных линий",
  },
  "office.type": {
    title: "Тип офиса",
    dict: officeType,
  },
  "com.square": {
    title: "Общая площадь, м²",
  },
  "house.security": {
    title: "Безопасность",
    dict: securityType,
  },
  "mortgage": {
    title: "В залоге",
    dict: yesNo,
  },
  "com.entrance": {
    title: "Отдельная входная группа",
    dict: yesNo,
  },
  "shop.type": {
    title: "Местоположение",
    dict: {
      "1": "в торговом центре",
      "2": "в административном здании",
      "3": "на универсальном рынке (барахолке)",
      "4": "в жилом доме",
      "5": "отдельно стоящее здание",
      "6": "остановочный комплекс",
      "7": "иное",
    },
  },
  "land.type": {
    title: "Местоположение",
    dict: {
      "1": "в городе",
      "2": "в пригороде",
      "3": "вдоль трассы",
      "4": "возле водоема, реки",
      "5": "в предгорьях",
      "6": "в дачном массиве",
    },
  },
  "estate.is_buss": {
    title: "Действующий бизнес",
    dict: yesNo,
  },
  "indust.rail": {
    title: "Ж/д тупик",
    dict: yesNo,
  },
  "indust.electr_station": {
    title: "Своя подстанция",
    dict: yesNo,
  },
  "indust.max_electr": {
    title: "Потребление энергии, до (кВт)",
  },
}

// API
export function search(params = {}) {
  let page = params.page || 1
  let offset = (page - 1) * LIMIT
  let queryCatId = params[CAT_ID_KEY] ? `&catId=${params[CAT_ID_KEY]}` : ''

  let url = `${URL_SEARCH}&offset=${offset}${queryCatId}`

  return fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err))
}

export function list(params) {
  return search(params)
    .then(result => {
      let paramIdentifiers = result.identifiers.map(id => 'identifiers[]=' + id).join('&');
      let url = `${URL_LIST}&${paramIdentifiers}`

      return fetch(url)
        .then(response => response.json())
        .then(result => result)
    })
}

export function item(id) {
  let url = `${URL_ITEM}&id=${id}`

  return fetch(url)
    .then(response => response.json())
    .then(result => result)
}

// Utils
export function getFields(item) {
  let data = item.data;

  return Object.keys(data)
    .filter(field => fieldDefinitions[field])
    .map(field => {
      let definition = fieldDefinitions[field]
      let value = data[field]

      // dict value
      if (definition.dict && (value || value == 0)) {
        if (definition.multiple) {
          value = Object.keys(value).map(keyVal => definition.dict[keyVal] || keyVal).join(', ')
        } else {
          value = definition.dict[value]
        }
      }

      if (definition.suffix && (value || value == 0)) {
        value += definition.suffix
      }

      return {
        title: definition.title,
        value
      }
    })
}