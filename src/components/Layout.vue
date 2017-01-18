<template>
  <div id="app" class="block">
    <h3 class="title">{{title}}</h3>

    <!-- 路由测试 -->
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/t1">/t1</router-link></li>
      <li><router-link to="/t2">/t2</router-link></li>
      <li><router-link to="/t2/123">/t2/123(动态路由匹配)</router-link></li>
      <li><router-link to="/t3">/t3</router-link></li>
      <li><router-link to="/t3/t31">/t3/t31(嵌套路由)</router-link></li>
    </ul>

    <!-- 路由跳转测试 -->
    <p>
      <button v-on:click="handleClick2">路由跳转测试 /t2?id=1234</button>
      <button v-on:click="handleClick1">路由跳转测试 /t3/t32</button>
    </p>

    <!-- 路由组件的容器 -->
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      title: 'This is Layout'
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
  mounted () {
    // 使用Bus总线监听孙子组件的事件
    this.$root.$data.bus.$on('busEventTest', (arg) => {
      alert(arg)
    })
  }
}
</script>

<style scoped>

</style>
