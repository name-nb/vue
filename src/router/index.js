import Vue from 'vue'
import Router from 'vue-router'
import Tops from '@/components/tops'
import Conents from '@/components/conents'
import Tabbar from '@/components/tabbar'


import Home from '@/pages/home'
import Bannar from '@/pages/bannar'
import Newlist from '@/pages/newlist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tops',
      name: 'tops',
      component: Tops
    },
    {
      path: '/conents',
      name: 'conents',
      component: Conents
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: Tabbar
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/bannar',
      name: 'bannar',
      component: Bannar
    },
    {
      path: '/newlist',
      name: 'newlist',
      component: Newlist
    },
  ]
})
