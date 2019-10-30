<template>
  <div class="root header">
    <div class="header-bar">
      <div class="container">
        <img class="logo svg" src="@/assets/logo-museum.svg" alt="logo museum">
        <ul class="menu-list">
          <router-link to="/">home</router-link>
          <router-link to="/visualisations">visualisations</router-link>
          <router-link to="/about">about</router-link>
          <router-link to="/contact">contact</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: ['menuItems']
}
</script>

<style lang="scss" scoped>
  @import '../css/_main.scss';

  .header-bar {
    position: fixed;
    z-index: 99;
    top: 0;
    width: 100%;
    background-color: $light-blue;
    transition: all .5s;

    .logo {
      padding: 10px 20px;
      max-width: 230px;
    }

    .container {
      max-width: 1080px;
      padding: 0 1em;
      margin: 0;
      display: flex;
      justify-content: flex-start;

      .menu-list {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        justify-content: flex-start;
      }

      a {
        position: relative;
        padding: 15px 30px;
        font-family: 'Nunito', arial, sans-serif;
        font-weight: 700;
        font-size: 1em;
        line-height: 3em;
        text-decoration: none;
        color: $black;

        &::before, &::after {
          height: 14px;
          width: 14px;
          position: absolute;
          content: '';
          -webkit-transition: all 0.35s ease;
          transition: all 0.35s ease;
          opacity: 0;
        }
      }

      a::before {
        left: 0;
        top: 0;
        border-left: 3px solid $green;
        border-top: 3px solid $green;
        -webkit-transform: translate(100%, 0%);
        transform: translate(100%, 0%);
      }

      a::after {
        right: 0;
        bottom: 0;
        border-right: 3px solid $green;
        border-bottom: 3px solid $green;
        -webkit-transform: translate(-100%, 0%);
        transform: translate(-100%, 0%);
      }

      a:hover::before {
        -webkit-transform: translate(0%, 50%);
          transform: translate(50%, 100%);
          opacity: 1;
      }

      a:hover::after {
        -webkit-transform: translate(0%, -50%);
          transform: translate(-50%, -100%);
          opacity: 1;
    }
  }
}

.root.header.white .header-bar {
  background-color: #fff;
  transition: all .5s;
}

</style>
