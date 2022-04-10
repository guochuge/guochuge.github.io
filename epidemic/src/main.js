// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'assets/css/normalize.css'

Vue.config.productionTip = false

// 把echarts开发成插件使用
import echarts from './plugins/echarts'
Vue.use(echarts);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
