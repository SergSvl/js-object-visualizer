import {server, serverExt} from './server';

// отправка формы через JS по кнопке "Авторизоваться"
/*
  В файле D:\Programs\OSPanel\domains\portalx\api\application\config\routes.php
  есть такие алиасы:
  $route['user/demo'] = 'rest/demo';
  $route['user/login'] = 'rest/login';
  $route['user/logout'] = 'rest/logout';
  $route['view'] = 'rest/view';
  $route['store'] = 'rest/store';
  $route['update'] = 'rest/update';
  $route['delete'] = 'rest/delete';
*/
export async function login(data){
  let formData = createFormData(data);
    // formData.append('login', data.login);
    // formData.append('password', data.password);
    // formData.append('task', data.task); // для переключения между разными БД для разных задач
    // formData.append('tokenName', data.tokenName);
    // formData.append('remember', data.remember);
    
    // $route['user/login'] = 'rest/login';
    let response = await server.post('user/login', formData);
    // console.log('api-response: ', response.data);
    return response.data;
}

// авто-авторизация по куке
export async function rememberLogin(data){
  let formData = createFormData(data);
  let response = await server.post('rest/rememberLogin', formData);
  // console.log('api-response: ', response.data);
  return response.data;
}

export async function logout(data){
  let formData = createFormData(data);
    // formData.append('login', data.login);
    // formData.append('task', data.task);
    // formData.append('tokenName', data.tokenName);
    let response = await server.post('user/logout', formData);
    // console.log('api-response: ', response.data);
    return response.data;
}

export async function read(data, noAuth = false){
  // noAuth = noAuth || false
  // where - это массив пар: ключ - значение в БД, например, ['id' => 1, 'name' => 'abc']
  // console.log('data: ', data);
  // let response = await server.get('rest/view', {
  //   params: data,
  // });
  let header = {Authorization: "1"}
  if (noAuth){
    header.Authorization = 0
  }

  let response = await server({
    method: 'get', 
    url: 'rest/view',
    headers: header,
    params: data,
  });
  // console.log('api-response: ', response.data);
  return response.data;
}

export async function save(data){
  let formData = createFormData(data);
  let response = await server.post('rest/store', formData);
  // console.log('api-response: ', response.data);
  return response.data;
}

export async function update(data){
  // let formData = createFormData(data);
  // console.log('api-updateData: ', data);

  // let response = await server.put('rest/update', data); - вот так метод put не передавал заголовок
  // Authorization по совсем непонятной причине, а вторым способом передал отлично.
  let response = await server({
    method: 'put', 
    url: 'rest/update', 
    headers: {Authorization: "1"}, 
    params: data
  });
  // console.log('api-response: ', response.data);
  return response.data;
}

export async function remove(data){
  // console.log('remove-data: ', data)
  let response = await server.delete('rest/delete', {
    params: {
      ids: [...data.ids],
      task: data.task,
      tokenName: data.tokenName,
      tableName: data.tableName
    }
  });
  // console.log('api-response: ', response.data);
  return response.data;
}

export async function removeImg(data){
  // console.log('remove-data: ', data)
  let response = await server.delete('rest/deleteImg', {
    params: {
      imageName: [data.imageName],
      tokenName: data.tokenName,  // без имени ключа не создается заголовок Authorization и ничего не работает
    }
  });
  // console.log('api-response: ', response.data);
  return response.data;
}

export async function sendTelegram(data){
  // console.log('data: ', data);
  let formData = createFormData(data);
  let response = await serverExt.post('telegram.php', formData);
  // console.log('api-response_telegram: ', response);
  return response.data;
}

function createFormData(data){
  // console.log('data: ', data);
  let formData = new FormData();
  for (let key in data){
    // console.log('FormData: ', data[key] + ', type: '+ typeof(data[key]));
    formData.append(key, data[key]);
  }
  return formData;
}
