<template>
  <div class="block">
    <h3 class="title">{{title}}</h3>
    <div>
      <ul>
        <li><router-link to="/m2/m21/12312">/m2/m21/666 -> 动态路由</router-link></li>
        <li><router-link to="/m2/m22">/m2/m22 -> 编程式导航</router-link></li>
        <li><router-link to="/m2/m23">/m2/m23 -> 路由别名</router-link></li>
        <li><router-link to="/m2/m24">/m2/m24 -> 组件内路由钩子</router-link></li>
        <li><router-link to="/m2/m25">/m2/m25 -> 命名视图</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
    <router-view class="view two" name="aaa"></router-view>
  </div>
</template>

<script>
export default {
  name: 'M2Vue',
  data () {
    return {
      title: 'VueRouter 路由'
    }
  },
  watch: {
    // 监测变化 $route 对象变化
    '$route'(to, from) {
      console.log('from-->', from);
      console.log('to-->', to);
    }
  }
}
</script>


<style scoped>

</style>
