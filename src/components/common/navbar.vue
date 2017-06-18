<template>
  <ul class="clearfix">
    <li>
      <router-link to="/m1"><i class="fa fa-circle" aria-hidden="true"></i>初识vue</router-link>
    </li>
    <li>
      <router-link to="/m2"><i class="fa fa-circle" aria-hidden="true"></i>路由切换</router-link>
    </li>
    <li>
      <router-link to="/m3"><i class="fa fa-circle" aria-hidden="true"></i>内容分发</router-link>
    </li>
    <li>
      <router-link to="/m4"><i class="fa fa-circle" aria-hidden="true"></i>事件</router-link>
    </li>
    <li>
      <router-link to="/m5"><i class="fa fa-circle" aria-hidden="true"></i>slot 子组件</router-link>
    </li>
     <li>
      <router-link to="/m6"><i class="fa fa-circle" aria-hidden="true"></i>render 函数</router-link>
    </li>
  </ul>
</template>

<script>

</script>

<style scoped>
  ul {
    margin-bottom: 40px;
  }
  li {
    float: left;
    margin-right: 20px;
    font-size: 16px;
  }
</style>
