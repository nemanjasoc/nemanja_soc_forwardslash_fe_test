import Vue from 'vue'
import App from './App.vue'
import store from './store/store';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
