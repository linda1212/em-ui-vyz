import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/pages/dashboard'
import OnlineEnergyMonitor from '@/pages/OnlineEnergyMonitor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/onlineEnergyMonitor',
      name: '综合能耗在线',
      component: OnlineEnergyMonitor
    }
  ]
})
