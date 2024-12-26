import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import promiseSync from './plugins/module/promise-sync'
import promiseAsync from './plugins/module/promise-async'

Vue.config.productionTip = false
promiseAsync.foo()
promiseSync.foo()
  .then((result) => {
    console.log(result) // 각 Promise가 완료된 후에 실행됨
  })
  .catch((error) => {
    console.log(error)
  })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
