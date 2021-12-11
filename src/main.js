import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

Vue.config.productionTip = false

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3tieOB0DHS9rAv3iO_EhLhL93R7qqrMw",
  authDomain: "fir-test-446a5.firebaseapp.com",
  projectId: "fir-test-446a5",
  storageBucket: "fir-test-446a5.appspot.com",
  messagingSenderId: "237081129376",
  appId: "1:237081129376:web:70f5fdce894f3c6a7234c5",
  measurementId: "G-0R3YTTS122"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

new Vue({
  router: router,
  store: store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
