<template>
  <div class="block">
    <h3 class="title">{{title}}</h3>
    <div>$route.params.userid = {{ $route.params.userid }}</div>
    <div>$route.query.name = {{ $route.query.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'M21Vue',
  data () {
    return {
      title: '模板获取路由参数'
    }
  }
}
</script>

<style scoped>

</style>
