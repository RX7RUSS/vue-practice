import Vue from 'vue'
import App from './App.vue'
import home from './home';

Vue.component('greeting', home);

new Vue({
  el: '#app',
  render: h => h(App)
})
