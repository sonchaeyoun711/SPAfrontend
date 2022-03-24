import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

//import VueAxios from 'vue-axios';
//import axios from 'axios';

// vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);
///Vue.use(VueAxios, axios);

Vue.config.productionTip = false

//Vue.prototype.$axios = axios

new Vue({
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
