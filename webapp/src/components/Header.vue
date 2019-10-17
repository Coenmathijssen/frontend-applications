<template>
  <div class="root header">
    <div class="header-container">
      <div v-bind:key="menuItem.id" v-for="menuItem in menuItems">
        <a v-bind:href="menuItem.a">
          <p class="menuItems">{{menuItem.title}}</p>
        </a>
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

  .header-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    max-width: 1080px;
    margin: 0 auto;

    a {
      font-size: 30px;
      color: $primary;
    }
  }

</style>
