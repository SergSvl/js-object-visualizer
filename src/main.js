import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './library/routes'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
import {store} from './store/'
import App from './App.vue'
import ElementUI from 'element-ui';
import { Notification, MessageBox, Message } from 'element-ui'

Vue.use(Vuex)
Vue.use(Vuelidate)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.prototype.$notify = Notification
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

import "./assets/css/tabs-component.css"


