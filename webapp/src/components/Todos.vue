<template>
  <div class="root todos">
    <div v-bind:key="todo.id" v-for="todo in todos">
      <h3>{{todo.title}}</h3>
      <router-view name="HelloWorld.vue"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todos',
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
      ]
    }
  }
}
</script>

<style scoped>

</style>
