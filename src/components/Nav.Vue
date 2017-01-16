<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/t1">/t1</router-link></li>

      <li><router-link to="/t2">/t2</router-link></li>
      <li><router-link to="/t2/123">/t2/123(动态路由匹配)</router-link></li>

      <li><router-link to="/t3">/t3</router-link></li>
      <li><router-link to="/t3/t31">/t3/t31(嵌套路由)</router-link></li>
      <li><router-link to="/t3/t32">/t3/t32(嵌套路由)</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Basic Router'
    }
  }
}
</script>
