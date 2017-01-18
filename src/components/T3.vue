<template>
  <div class="block">
    <h3 class="title">{{msg}}</h3>
    <p>$route.params.id = {{ $route.params.id }}</p>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'T3',
  data () {
    return {
      msg: 'This is T3'
    }
  }
}
</script>

<style scoped>

</style>
