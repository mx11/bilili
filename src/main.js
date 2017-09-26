import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);
Vue.use(Vuex);
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    showList: [],
    dramaList: [],
    commondList: [],
    skinColor: 'localStorage.skinColor' || '#35495e',
  },
  mutations: {
    changeColor(state, color){
      state.skinColor = color;
    }
  }
})

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
