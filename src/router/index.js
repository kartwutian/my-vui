import Vue from 'vue'
import Router from 'vue-router'
import Entry from '@/components/Entry'
import Buttons from '@/components/Buttons'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'entry',
      component: Entry
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: Buttons
    }
  ]
})
