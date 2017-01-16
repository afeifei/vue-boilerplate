<template>
  <div class="t3">
    <p>{{msg}}</p>
    $route.params.id = {{ $route.params.id }}
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
