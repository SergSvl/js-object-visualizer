import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './library/routes'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
import {store} from './store/'
import App from './App.vue'
// import ElementUI from 'element-ui';
import { Notification, MessageBox, Message } from 'element-ui'
// import LazyLoadDirective from './directives/LazyLoadDirective'

Vue.use(Vuex)
Vue.use(Vuelidate)
Vue.use(VueRouter)  // говорим Vue, что используем плагин для работы с роутером
// Vue.use(ElementUI)
Vue.prototype.$notify = Notification
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

// Vue.directive('lazyload', LazyLoadDirective)

// Vue.mixin({
//   mounted(){
//     console.log('Я глобальный миксин!')
//   }
// })

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

// import "./assets/css/bootstrap.min.css";
// import "./assets/css/admin_style.css";
// import "./assets/css/default.css";
import "./assets/css/tabs-component.css"
// import "./assets/js/reflection.js"

// document.addEventListener("DOMContentLoaded", function(event){
//   window.onresize = function() {
//     /* Для измененния высоты кнопок при ресайзе окна */
//     /* Библиотека reflection.js for jQuery v1.11 */
//     /* Для этой библиотеки используется jQuery, подключаемое в index.html */
//     $(".reflect img").reflect({
//       height: 0.35, // высота отражения картинки на кнопке: 90 px = 35%
//       opacity: 0.5
//     })
//     // console.log('resized')
//   };
// });

// var path = require('path')
// console.log(path.join(__dirname, './index.html'));
// console.log(path.join(__dirname, './src/**/*.vue'));
// console.log(path.join(__dirname, './src/**/*.js'));

