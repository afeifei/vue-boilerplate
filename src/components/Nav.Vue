<template>
  <div id="app" class="block">
    <h3 class="title">{{title}}</h3>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/t1">/t1</router-link></li>

      <li><router-link to="/t2">/t2</router-link></li>
      <li><router-link to="/t2/123">/t2/123(动态路由匹配)</router-link></li>

      <li><router-link to="/t3">/t3</router-link></li>
      <li><router-link to="/t3/t31">/t3/t31(嵌套路由)</router-link></li>
    </ul>
    <p>
      <button v-on:click="handleClick2">路由跳转测试 /t2?id=1234</button>
      <button v-on:click="handleClick1">路由跳转测试 /t3/t32</button>
    </p>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'This is Nav'
    }
  },
  methods: {
    handleClick1 (evt) {
      evt.preventDefault()
      this.$router.push('/t3/t32')
    },
    handleClick2 (evt) {
      evt.preventDefault()
      this.$router.push({path: '/t2', query: { id: '1234' }})
    }
  },
  created () {
    console.log('nav', this)
    // console.log(this.$router)
  }
}
</script>

<style scoped>

</style>
