import Vue from 'vue'
import Router from 'vue-router'
import ExchangeGift from '@/components/ExchangeGift'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ExchangeGift',
      component: ExchangeGift
    }
  ]
})
