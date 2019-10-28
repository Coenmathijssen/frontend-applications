<template>
  <div id="app">
    <Header v-bind:menuItems="menuItems"/>
    <router-view/>
    <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
  </div>
</template>

<script>
  /*eslint 'no-console':0*/

  import Header from './components/Header'
  // import Todos from './components/Todos'

export default {
  name: 'app',
  components: {
    Header
    // Todos
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

// CHANGE HEADER COLOR ON SCROLL

let hasChanged = false
let test = document.getElementById('header')
console.log(test, testt)


function runOnScroll() {
    if (document.body.scrollTop > 50) {
     const menuBackground = document.getElementsByClassName("header-bar")[0]
      console.log('hello', menuBackground)
      menuBackground.style.backgroundColor = "white"
      }
 }

window.addEventListener("scroll", runOnScroll)
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Serif&display=swap');

@import './css/_main.scss';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Noto Serif', serif;
}

h1 {
}

p, li {
  font-family: 'lato', arial, sans-serif;
  font-size: 1em;
  line-height: 1.5;
}

.container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 3em 2em;
  max-width: 1280px;
}

.button {
  position: relative;
  z-index: 1;
  top: 10px;
  margin-left: 44px;
  font-family: 'Noto Serif', serif;
  font-weight: bold;
  color: $black;
  text-decoration: none;

  &::before {
    display: inline-block;
    position: absolute;
    z-index: -1;
    content: '';
    left: -44px;
    top: -6px;
    padding: 2px;
    background: #fff;
    background-image: url('./assets/arrow-right.svg');
    background-size: 28px 28px;
    background-position: top 4px left 4px;
    border-radius: 40px;
    height: 32px;
    width: 32px;
    background-repeat: no-repeat;
    transition: width .4s ease-in-out, background-position .2s ease-in-out;
  }

  &:hover::before {
    background-position: top 4px left 8px;
    border-radius: 40px;
    height: 32px;
    width: 300px;
  }
  // &::before {
  //   display: inline-block;
  //   position: absolute;
  //   z-index: -1;
  //   content: '';
  //   left: -40px;
  //   top: 0;
  //   padding: 1px;
  //   background: #fff;
  //   background-image: url('./assets/arrow-right.svg');
  //   background-size: 28px 28px;
  //   background-repeat: no-repeat;

  // }
}


</style>
