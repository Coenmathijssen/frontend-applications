<template>
  <div id="app">
    <Header v-bind:menuItems="menuItems" ref="header"/>
    <router-view/>
    <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
  </div>
</template>

<script>
  /*eslint 'no-console':0*/

  import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Header
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
  }),
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    // Needed to use the documentElement to access the document in DOM. When theres's more than 50px scrolled from the top. The class white is added to change the menu to white. If it's less than 50, it will be removed again. You need to use a ref to acces elements and use $el to use the DOM functions.
    onScroll() {
      if (document.documentElement.scrollTop >= 50) {
        this.$refs.header.$el.classList.add("white")
     } else if (document.documentElement.scrollTop < 50) {
        this.$refs.header.$el.classList.remove("white")
     }
    }
  }
}

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
    width: calc(100% + 55px);
  }
}


</style>
