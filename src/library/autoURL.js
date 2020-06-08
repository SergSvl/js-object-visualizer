/*
  Auto select the valid host for baseUrl based on config.js
  */
const regExp = /^(https?:\/\/)?([a-z0-9].*)/i // отрезаем от адреса протокол http:// или https://, если он есть
// получаемый объект конфига из стора
let configUrl = {}

export const getSubdomain = () => {
  // console.log('configUrl.subdomain: ', configUrl.subdomain)
  // параметр не должен содержать в URL знака вопроса, что бы нельзя было подставить параметр
  if (configUrl.subdomain.indexOf('?') != -1){
    return document.location.host
  }
  return configUrl.subdomain
}

export const autoUrlApi = () => {
  let sub = 'api'
  // console.log('getURLApi: ', getURL(sub))
  return getURL(sub)
}

export const autoUrl = () => {
  let sub = ''
  // console.log('getURL: ', getURL(sub))
  return getURL(sub)
}

function getURL(sub) {
  // console.log('config: ', config)
  // console.log('baseUrl: ', config.baseUrl)
  // console.log('typeof configUrl.baseUrl: ', typeof configUrl.baseUrl)
  // console.log('host: ', document.location.host)
  // console.log('regexp: ', config.baseUrl[0].match(regExp)[2])
  // let protocol = 'http'
  let url = ''

  if (typeof configUrl.baseUrl == 'object'){
    for (let i = 0; i < configUrl.baseUrl.length; i++){
      if (configUrl.baseUrl[i].match(regExp)[2] != undefined){
        url = configUrl.baseUrl[i].match(regExp)[2]
      } else {
        url = configUrl.baseUrl[i].match(regExp)[0]
      }
      // console.log('regexp: ', url)
      if (document.location.host.indexOf(url) > -1){
        // console.log('URL: ', protocol+'://'+url+sub)
        // return protocol+'://'+url+'/'+sub
        return '//'+url+'/'+sub
      }
    }
  }
  // console.log('getURL: ', url)
  // сюда попадаем, если вошли с localhost или с portalx
  // return protocol+'://portalx/'+sub // это чисто для dev-режима
  return '//portalx/'+sub // это чисто для dev-режима
}

// Эта ф-ция вызывается в сторе для получения из него объекта конфига
export function autoUrlSendConfig(config) {
  // console.log('autoUrlSendConfig: ', config)
  configUrl = config
  // console.log('configUrl: ', configUrl)
}
