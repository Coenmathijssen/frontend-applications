<template>
  <div id="app">
    <Header v-bind:menuItems="menuItems"/>
    <router-view/>
    <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
  </div>
</template>

<script>
  import Header from './components/Header'
  import Todos from './components/Todos'

export default {
  name: 'app',
  components: {
    Header,
    Todos
  },
  data: () => ({
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
  })
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Nunito', arial, sans-serif;
}

p {
  font-family: 'lato', arial, sans-serif;
}


</style>
