// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'

Vue.use(BootstrapVue)
Vue.component('www', {
  template: '<div>A custom component!</div>'
})
Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption;
    if (myOption) {
      console.log(myOption)
    }
  }
})
/* Vue.directive('toReverse',{
  inserted:function(el){
    console.log(el);
  }
}) */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
  myOption: 'hello vue mixin'
})
