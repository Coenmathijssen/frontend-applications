<template>
  <div id="app">
    <Header v-bind:menuItems="menuItems"/>
    <Todos v-bind:todos="todos"/>
  </div>
</template>

<script>
  import Todos from './components/Todos'
  import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Todos,
    Header
  },
  data () {
    return {
      todos: [
        {
          id: 1,
          title: 'Todo one',
          completed: false
        },
        {
          id: 2,
          title: 'Todo two',
          completed: true
        }
      ],
      menuItems: [
        {
          id: 1,
          title: 'home',
          a: '/home'
        },
        {
          id: 2,
          title: 'visualisations',
          a: '/vis'
        },
        {
          id: 3,
          title: 'about',
          a: '/about'
        },
        {
          id: 4,
          title: 'contact',
          a: '/contact'
        }
      ]
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
