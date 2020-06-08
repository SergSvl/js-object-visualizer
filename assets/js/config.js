conf = {
  subdomain: 'srvt.baltalm.ru', // хост, с которого брать скан
  // subdomain: 'avatars.mds.yandex.net/get-pdb/1778306/f2446ead-b2ee-489d-93a3-e0493e3284f2/s1200?u=', // хост, с которого брать скан
  // baseUrl: '',
  baseUrl: [
    'srvt.baltalm.ru',
    'baltalm.ru',
    '195.182.141.130',
    '192.168.20.226', // работает через VPN
  ],
  // arrival: [],
  remember_cookie_name: 'remember_code_rkd', // имя куки кода запоминания в архиве - копия этого поля в api/application/config/ion_auth.php
  // orderList: '001',
  orderList: [
    '021-02708',
    '007-01912',
    '05708',
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
  // telegramLinks: '',
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
    'srgsvl@list.ru', // мастер - только для просмотра схем и № литеры
  ],

  // Юзеры для задачи "Поступление кабеля на заказ"
  rights: {
    technologist: [ // технолог
      'srgsvl@list.ru',
    ],
    supplier: [ // Поставщик
      'srgsvl@2.ru',
    ],
    storekeeper: [ // Кладовщик
      'srgsvl@3.ru',
    ],
    master: [ // Мастер
      'srgsvl@4.ru',
    ],
    director: [ // управляющий
      // 'admin@admin.com',
      'vvn@baltalm.ru',
      'kab@baltalm.ru',
      'kr@baltalm.ru'
    ]
  }
}
