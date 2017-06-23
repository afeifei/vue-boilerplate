<template>
  <ul class="clearfix">
    <li>
      <router-link to="/m1"><i class="fa fa-superpowers" aria-hidden="true"></i>m1 初识vue</router-link>
    </li>
    <li>
      <router-link to="/m2"><i class="fa fa-superpowers" aria-hidden="true"></i>m2 路由切换</router-link>
    </li>
    <li>
      <router-link to="/m3"><i class="fa fa-superpowers" aria-hidden="true"></i>m3 内容分发</router-link>
    </li>
    <li>
      <router-link to="/m4"><i class="fa fa-superpowers" aria-hidden="true"></i>m4 事件</router-link>
    </li>
    <li>
      <router-link to="/m5"><i class="fa fa-superpowers" aria-hidden="true"></i>m5 slot 子组件</router-link>
    </li>
    <li>
      <router-link to="/m6"><i class="fa fa-superpowers" aria-hidden="true"></i>m6 render 函数</router-link>
    </li>
    <li>
      <router-link to="/m7"><i class="fa fa-superpowers" aria-hidden="true"></i>m7 分页组件</router-link>
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
  .fa {
    margin-right: 3px;
  }
</style>
