import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

import firebaseConfig from './firebase_config'

Vue.config.productionTip = false

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const db = getFirestore();

new Vue({
  router: router,
  store: store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
