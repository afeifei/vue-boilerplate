<template>
  <div class="t3 block">
    <h3 class="title">{{msg}}</h3>
    <p>$route.params.id = {{ $route.params.id }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 't3',
  data () {
    return {
      msg: 'This is T3'
    }
  }
}
</script>

<style scoped>
.t3 p{
  color: #064;
}
</style>
