<template>
  <a href="#" class="button" v-bind:href="link">{{ btnText }}</a>
</template>

<script>
  export default {
    name: 'Button',
    props: ['link', 'btnText']
  }
</script>

<style lang="scss" scoped>
  @import '../css/_main.scss';

  .button {
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 10px;
  margin: 20px 0;
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
    background-image: url('../assets/arrow-right.svg');
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
