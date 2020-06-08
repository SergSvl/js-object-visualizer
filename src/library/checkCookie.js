import {read, rememberLogin} from './api.js'

export default async function checkCookie(ctx){
  /*
    Работает это так:
    1. Пытаемся получить куки из браузера.
      Если кук нет, это значит, что они просрочены и нужно заново вводить логин и пароль.
      Иначе, куки еще действуют и можно возобновить сеанс.
    2. Если куки есть, тогда достаем из них код remember_selector (это первая строка перед точкой) и делаем запрос в БД для получения всей инфы о юзере из таблицы users.
    3. Получив данные, формируем запрос к API, к ф-ции: rememberLogin(), которая должна восстановить сеанс и снова авторизовать юзера.
    4. После успешной авторизации, перенаправить на страницу start.

    Как работает ф-ция rememberLogin():
    1) Пытается авторизовать юзера:
      // куки: remember_code=19755bc0d81f8603b377b9b4fa496d52513aed14.d9c2cd20f642e0ea9a838c8ae62b9fef25ee34b697797a0b6bfe161766ec5cd66db6d9063f1db1ffdd0e61f084e7bad299205ce72561451b9b2fd442bfd56ef4
      // $remember_cookie - это строка из куки, что после знака "="
      $auth = $this->ion_auth_model->login_remembered_user($remember_cookie);
      Эта ф-ция создает новые куки, и сохраняет их в БД, в таблицу юзера, обновляя поля:
        remember_code и remember_selector.
    2) Если все успешно, то ф-ция rememberLogin() теперь формирует данные для куки в браузере, а так же генерит новый токен:
      $token = $this->authorization_token->generateToken($payload);
      на основе таких данных:
        $payload = [
          'login' => $login,
          'tokenName' => $tokenName,
        ];
      И все это передается клиенту и интерцептор сервера (server.interceptors.response.use()) ставит куки и сохраняет токен в локальное хранилище браузера.
  */
  
  let cookies = document.cookie, cookiesArr, selector = '', code
  // console.log('cookies: "',cookies+'"')
  // console.log('cookies.length: ', cookies.length)
  // console.log('cookies.length: ', cookies.length > 0)
  /*
    remember_selector = 19755bc0d81f8603b377b9b4fa496d52513aed14
    remember_code = 19755bc0d81f8603b377b9b4fa496d52513aed14.d9c2cd20f642e0ea9a838c8ae62b9fef25ee34b697797a0b6bfe161766ec5cd66db6d9063f1db1ffdd0e61f084e7bad299205ce72561451b9b2fd442bfd56ef4
    hash = $2y$10$Nl7P4WcQWoddLEDpn1c5PuK2soiPAgJbtpG0zScXmEXg0z3eSXgXK
  */
  if (cookies.length > 0){
    cookiesArr = cookies.split(';')
    selector = ''

    // если параметр куки не строка, например, а объект какой-нибудь стал, то просто не восстанавливаем авторизацию
    if (typeof ctx.config.remember_cookie_name == 'string'){
      for (let i=0; i < cookiesArr.length; i++){
        if (cookiesArr[i].indexOf(ctx.config.remember_cookie_name) != -1){
          // console.log('remember_code!')
          // получаем из куки ее значение, после знака "="
          let data = cookiesArr[i].split('=')
          code = data[1]
          selector = code.split('.')[0]
          // console.log('name = ', data[0])
          // console.log('code = ', code)
          // console.log('selector = ', selector)
          break
        }
      }

      if (selector){
        try {
          let data = {
            tableName: 'users', // имя таблицы - обязательный параметр
            where: JSON.stringify({"remember_selector": selector}),
            tokenName: ctx.tokenName, // обязательный параметр
          }
          // console.log('data: ', data)
          // console.log('try data: ', data)
          // получаем данные о юзере
          let response = await read(data, true);
          let res = response.result.get[0]
          // let res = response.result
          // console.log('user data response.result.get: ', res)
          // console.log('ctx.task: ', ctx.task)

          data = {
            remember_cookie: code,
            tokenName: ctx.tokenName,
            username: res.username,
            email: res.email,
          }
          // console.log('Login data: ', data)
          // А здесь нужно произвести реавторизацию
          let auth = await rememberLogin(data)
          // console.log('rememberLogin: ', auth)
          return auth
        } catch(err) {
          console.log('Ошибка проверки куки: ', err);
          return 0
        }
      }
    }
  }
  return 0
}
