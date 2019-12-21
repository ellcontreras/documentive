import Vue from 'vue'
import Index from './Index.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Buefy from 'buefy'

import 'buefy/dist/buefy.css'
import './assets/theme.scss'
import FirebaseAuthPlugin from './FirebaseAuthPlugin'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
})

Vue.config.productionTip = false

Vue.use(FirebaseAuthPlugin)

new Vue({
  router,
  store,
  render: h => h(Index)
}).$mount('#app')
