import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store'
import router from './router/index'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
