// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import store from './store'
import YDUI from '../ydui/ydui'
import { flexible } from '../ydui/ydui.flexible'
import axios from 'axios'


Vue.use({
  install: function (Vue) {
    Vue.prototype.$axios = axios
  }
})

flexible()
fastclick.attach(document.body)
Vue.use(YDUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
var myVue = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

console.log(myVue)

let scrollTop = 0;

router.beforeEach((route, redirect, next) => {
  if (redirect.path === '/') {
    scrollTop = document.getElementById('scrollView').scrollTop;
  }
  document.title = 'YDUI Touch - ' + route.name;
  next();
});

router.afterEach(route => {
  if (route.path === '/') {
    Vue.nextTick(() => {
      document.getElementById('scrollView').scrollTop = scrollTop;
    });
  } else {
    document.getElementById('scrollView').scrollTop = 0;
  }
});
