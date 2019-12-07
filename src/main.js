import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from "firebase"

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCnXJigrILkSbRHWmMRaVpVgekY76ep6e4",
  authDomain: "documentive-da37d.firebaseapp.com",
  databaseURL: "https://documentive-da37d.firebaseio.com",
  projectId: "documentive-da37d",
  storageBucket: "documentive-da37d.appspot.com",
  messagingSenderId: "712719294772",
  appId: "1:712719294772:web:05fbe9ced78af581018561",
  measurementId: "G-SJNTCRTNP7"
})

firebase.analytics()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
