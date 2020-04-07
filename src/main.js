import Vue from 'vue'
import App from './App.vue'
import store from './store/store';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

export const eventBus = new Vue();

Vue.filter('toCurrency', function (value) {
  if (typeof value !== "number") {
      return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
  });
  return formatter.format(value);
});

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
