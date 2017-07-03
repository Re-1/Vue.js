import Vue from 'vue'
import App from './App.vue'

// global filter
Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase();
});

// global mixins (only can be used for 3rd party Vue plugins)
Vue.mixin({
  created() {
    console.log('global mixin created.')
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
