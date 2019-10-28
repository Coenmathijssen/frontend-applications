import Vue from 'vue'
import Router from 'vue-router'
import Todos from '@/components/Todos'
import HelloWorld from '@/components/HelloWorld'
import Data from '@/components/Data'

// Homepage
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/visualisations',
      name: 'Visualisations',
      components: {
        default: Data,
        HelloWorld: HelloWorld
      }
    },
    {
      path: '/about',
      name: 'About',
      props: true,
      component: Todos
    },
    {
      path: '/contact',
      name: 'Contact'
    }
  ]
})
