<template>
  <div class="block">
    <h3 class="title">{{msg}}</h3>
    <p>$route.params.id = {{ $route.params.id }}</p>
    <p>$route.query.id = {{ $route.query.id }}</p>
  </div>
</template>

<script>
export default {
  name: 'T2',
  data () {
    return {
      msg: 'This is T2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
