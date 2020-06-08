import Vue from 'vue'
import Vuex from 'vuex'
import {getSubdomain, autoUrlApi, autoUrl, autoUrlSendConfig} from '../library/autoURL'
Vue.use(Vuex)
const defaultConfig = {
  subdomain: 'srvt.baltalm.ru', // хост, с которого брать скан
  baseUrl: [
    'srvt.baltalm.ru',
    'baltalm.ru',
    '195.182.141.130',
    '192.168.20.226', // работает через VPN
  ],
  // arrival: [],
  remember_cookie_name: 'remember_code_rkd', // имя куки кода запоминания в архиве - копия этого поля в api/application/config/ion_auth.php
  orderList: [
    'default config',
  ],
  telegram: [
    {
      telegram_token: '1269523575:AAFQCaWbvkp2TXdeDiY-LEDqFWXZtGhsF-0', // токен от @BotFather
      telegram_chat_id: '-1001421968910', // chat_id для телеграм
    },
    // {
    //   telegram_token: '1072924358:AAFTZX4qXDRiP7Pxqe-Lwd7wPUeqxhIFFVA', // токен от @BotFather
    //   telegram_chat_id: '-390436489', // chat_id для телеграм
    // },
    // {
    //   telegram_token: '927652360:AAG0y9YLXIMnE2KK1y_g0lBHFJwTcs3V8ek', // токен от @BotFather
    //   telegram_chat_id: '-1001336455697', // chat_id для телеграм
    // },
  ],
  telegramLinks: [
    't.me',
    't-do.ru',
    't.elegram.ru',
    'teleg.run',
    'tele.click',
    'tg.telepult.pro'
  ],

  // Юзеры для задачи "Архив РКД"
  emailEditor: [ // уровень полного доступа к архиву у редактора
    'admin@admin.com',
  ],
  emailMaster: [
    'default@admin.com', // мастер - только для просмотра схем и № литеры
  ],

  // Юзеры для задачи "Поступление кабеля на заказ"
  rights: {
    technologist: [ // технолог
      'admin@admin.com',
    ],
    supplier: [ // Поставщик
      'admin@admin.com',
    ],
    storekeeper: [ // Кладовщик
      'admin@admin.com',
    ],
    master: [ // Мастер
      'admin@admin.com',
    ],
    director: [ // управляющий
      'admin@admin.com',
    ]
  }
}
// получение валидного объекта конфига из внешнего файла /js/config.js, если он определен
// если conf = undefined, тогда используется объект defaultConfig
// @ts-ignore
const config = getConfig(conf, defaultConfig)
autoUrlSendConfig(config) // передача конфига в модуль настройки URL

export const store = new Vuex.Store({
  state: {
    subdomain: getSubdomain(),
    baseUrl: autoUrl(),
    baseUrlApi: autoUrlApi(),
    // homeBtn: false,
    // logoutBtn: false,
    // loginBtn: false,
    tokenName: '',
    task: '',
    startPage: '',
    // tableRkd: [],
    // tableArrival: [],
    notifyPosition: 'top-left',
    // logEmail: 'srgsvl@list.ru'
    // ads: [
    //   {
    //     date: (new Date()).getTime(),
    //     title: 'Потеряна связь с сервером',
    //     text: 'Это объявление показывается потому, что пропала связь с сервером. Проверьте интернет-соединение в первую очередь. Если оно в порядке, то есть проблемы на стороне сервера. После восстановления интернет-соединения, это объявление пропадет и автоматически появятся обычные.',
    //     sign: 'Автоматическая справка',
    //     scan: '',
    //     published: 1
    //   }
    // ], // объявления
    config: config,
  },
  getters: {
    subdomain(state){
      return state.subdomain
    },
    baseUrl(state){
      return state.baseUrl
    },
    baseUrlApi(state){
      return state.baseUrlApi
    },
    startPage(state){
      return state.startPage
    },
    config(state){
      return state.config
    },
  },
  mutations: {
    setStartPage(state, name){
      state.startPage = name
    },
  },
  actions: {

  },
  strict: process.env.NODE_ENV !== 'production',
  // env: process.env,
  // base: process.env.BASE_URL,
  // process: process,
})

function getConfig(conf, defaultConfig){
  /*
    Проверка объекта из конфиг-файла на предмет его правильности по структуре
  */
  // console.log('typeof conf: ', typeof conf)

  if (typeof conf == 'object'){
    // console.log('config is OK')
    return conf
  } else {
    console.log('config is Not OK')
    // console.log('defaultConfig: ', defaultConfig)
    return defaultConfig
  }
}
