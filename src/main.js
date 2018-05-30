// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {XHeader, TransferDom} from 'vux'

Vue.config.productionTip = false

Vue.component('x-header', XHeader)

Vue.directive('transfer-dom', TransferDom)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
