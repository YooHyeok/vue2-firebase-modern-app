import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import promiseAsnyc from './plugins/module/promise-async'

Vue.config.productionTip = false
promiseAsnyc.foo()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
