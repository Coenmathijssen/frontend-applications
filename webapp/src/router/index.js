import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Todos from '@/components/Todos'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Header
    },
    {
      path: '/visualisations',
      name: 'Visualisations',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      props: true,
      component: Todos
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Header
    }
  ]
})
