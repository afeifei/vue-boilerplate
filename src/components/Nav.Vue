<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/t1">/t1</router-link></li>

      <li><router-link to="/t2">/t2</router-link></li>
      <li><router-link to="/t2/123">/t2/123(动态路由匹配)</router-link></li>

      <li><router-link to="/t3">/t3</router-link></li>
      <li><router-link to="/t3/t000">/t3/t000(动态路由匹配)</router-link></li>
      <li><router-link to="/t3/t31">/t3/t31(嵌套路由)</router-link></li>
      <li><router-link to="/t3/t32">/t3/t32(嵌套路由)</router-link></li>
    </ul>
    <button v-on:click="handleClick1">路由跳转测试 /t3/t31</button>
    <button v-on:click="handleClick2">路由跳转测试 /t2/1234</button>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Basic Router'
    }
  },
  methods: {
    handleClick1: function (evt) {
      evt.preventDefault()
      this.$router.push('/t3/t31')
    },
    handleClick2: function (evt) {
      evt.preventDefault()
      this.$router.push({path: '/t2', query: { id: '1234' }})
    }
  },
  created: function () {
    console.log('nav', this)
    // console.log(this.$router)
  }
}
</script>
