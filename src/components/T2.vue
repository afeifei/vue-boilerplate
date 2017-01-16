<template>
  <div class="t2">
    <p>{{msg}}</p>
    <p>$route.params.id = {{ $route.params.id }}</p>
    <p>$route.query.id = {{ $route.query.id }}</p>
  </div>
</template>

<script>
export default {
  name: 't2',
  data () {
    return {
      msg: 'This is T2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.t2 p{
  color: #964;
}
</style>
