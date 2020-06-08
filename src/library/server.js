import axios from 'axios'
import {store} from '../store'
// console.log('baseUrlApi API: ', store.getters.baseUrlApi)

let server = axios.create({
  // withCredentials: true,
  baseURL: store.getters.baseUrlApi
})

/* Специально для Телеграма создал сервер с другим baseURL */
let serverExt = axios.create({
  // withCredentials: true,
  baseURL: store.getters.baseUrl + 'bboard/'
})
serverExt.interceptors.request.use(function(request){
  return request
})
serverExt.interceptors.response.use(function(response){
  if (typeof response.data !== 'object'){
    // console.log('OBJ response.data = ', response.data.errors);
    console.log("serverExt response.data::\n", response.data)
    // console.log('OBJ response = ', response);
    // код здесь работает асинхронный, а мы бросаем исключения как в синхронном коде!
    throw new Error(response.data.error)
  } else {
    // console.log('Response.data.errors = ', response.data.errors)
    // console.log('Server response.data = ', response.data)
    // console.log('Response = ', response)
    return response
  }
})


// server.defaults.headers.common['Authorization'] = '0'; // для всех запросов

// этот интерцептор на запрос - динамически выполняет вложенную ф-цию (callback) перед запросом
server.interceptors.request.use(function(request){
  // console.log('Server request IN: ', request);
  // return;
    
  // если совершаем вход или выход, или авто-авторизацию по куке, CORS запрещает присутствие ключа Authorization в заголовке
  if (request.url.indexOf('logout') !== -1 || request.url.indexOf('login') !== -1 || request.url.indexOf('rememberLogin') !== -1){
    // console.log('url: ', request.url);
    // console.log('request: ', request);
    return request
  }

  let token

  // console.log('request.method: ', request.method)
  // console.log('request.params.tokenName: ', request.params.tokenName)
  // console.log('request: ', request)
  // console.log('request.data.tokenName: ', request.data.tokenName);
  
  if (request.method == 'get' || request.method == 'put' || request.method == 'delete'){
    // console.log('request.params.tokenName: ', request.params.tokenName)
    token = localStorage.getItem(request.params.tokenName)
  } else {
    token = localStorage.getItem(request.data.get('tokenName'))
  }
  // console.log('Server request: ', request.data);
  // console.log('Server tokenName: ', request.data.get('tokenName'));
  // console.log('Server token: ', token);

  // проверить, если в localStorage есть наш токен, то в этом случае добавить его в заголовок.
  // Если его нет в локалсторадже, то токена не будет
  if (token !== null){
    // console.log('Server token ЕСТЬ');
    request.headers.Authorization = token;
  } else {
    // console.log('Server token НЕТ');
    // здесь нельзя писать = null, т.к. при передаче заголовка null преобразуется к строке и все ломается!
    request.headers.Authorization = '';
  }
  // console.log('Server request.headers: ', request.headers);
  // console.log('Server request OUT: ', request);
  return request
})


// этот интерцептор на ответ - динамически выполняет вложенную ф-цию (callback) после запроса
server.interceptors.response.use(function(response){
  if (typeof response.data !== 'object'){
    // console.log('OBJ response.data = ', response.data.error)
    console.log("OBJ response.data::\n", response.data)
    // console.log('OBJ response = ', response)
    // код здесь работает асинхронный, а мы бросаем исключения как в синхронном коде!
    throw new Error(response.data.error)
  } else {
    /*
    Set-Cookie: ci_session=pvgb42f7tduafo11dkmmocnkbii63t2d; expires=Sun, 15-Dec-2019 19:24:00 GMT; Max-Age=7200; path=/; HttpOnly
    Set-Cookie: remember_code=4e184c8d65d58fadf4d13e39e5676866c9b05f8e.49b2c16e1f90cfd6d004fe46a28bf39560382610c79c2d2d1fd5e01c840a4369edd4d2fe8d9dfb4fd5de4f2e1e5e431c2501025e83384e56b8c1cdad13ab2c83; expires=Mon, 16-Dec-2019 17:25:40 GMT; Max-Age=86500; path=/
    */

    // console.log('Response.data.errors = ', response.data.errors)
    // console.log('Server response.data = ', response.data)
    // console.log('Response = ', response)
    // console.log('response-tokenName = ', response.data['tokenName'])

    // console.log('Server response.data.result = ', response.data.result)
    // console.log('Server response.data.result[coockies] = ', response.data.result['coockies'])
    // console.log('response.data.result[coockies][remember_code] = ', response.data.result['coockies'][config.remember_cookie_name])
    
    // если параметр куки в конфиге - строка, то можно ставить куку
    if (typeof store.getters.config.remember_cookie_name == 'string'){
      if (response.data.result && response.data.result['coockies'] !== undefined && 
        response.data.result['coockies'][store.getters.config.remember_cookie_name] !== undefined
      ){
        let cookie = response.data.result['coockies'][store.getters.config.remember_cookie_name];
        document.cookie = store.getters.config.remember_cookie_name+'='+cookie['cookieValue']+'; expires='+new Date()+'; Max-Age='+cookie['cookieExpire']+'; path=/'
      }
    }

    if (response.data.result){
      if (!response.data.result.get){
        if (response.data.result.logout){
          localStorage.removeItem(response.data.result['tokenName'])
          localStorage.removeItem(response.data.result['tokenName']+'User')
          localStorage.removeItem(response.data.result['tokenName']+'Login')
        } else {
          localStorage.setItem(response.data.result['tokenName'], response.data.result['token'])
          localStorage.setItem(response.data.result['tokenName']+'User', response.data.result['name'])
          localStorage.setItem(response.data.result['tokenName']+'Login', response.data.result['login'])
        }
      }
    }
  }
  return response
})

export {server, serverExt}
