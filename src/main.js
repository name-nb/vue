// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from "axios";//那个组件要使用 就调用
import App from './App'
import router from './router'
import ajax from './api/jiekou'
import './assets/js/rem'
// import $ from 'jquery'; //那个组件要使用 就调用jq

import MintUI from 'mint-ui'//
import 'mint-ui/lib/style.css'//mintui 
Vue.use(MintUI)//

//vuex引入文件 那个组件需要就调用
// import Vue from 'vue'
// import Vuex from 'vuex'   
// Vue.use(Vuex);

Vue.config.productionTip = false
Vue.prototype.$ajax=ajax

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
