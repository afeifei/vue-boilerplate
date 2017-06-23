<template>
  <div id="app" class="block">
    <h3 class="title txt-center bold">{{title}}</h3>
    <!-- 路由组件的容器 -->
    <router-view class="view"></router-view>
    <notifications position="bottom center"/>
  </div>
</template>

<script>
export default {
  name: 'LayoutVue',
  data () {
    return {
      title: 'Welcome to VUE\'s World'
    }
  },
  methods: {
  },
  mounted () {
    console.log('当前环境注入的变量', ENV);
    // 使用Bus总线监听孙子组件的事件
    this.$root.$data.bus.$on('updateChannel', (evt) => {
      console.log('Root监听到总线事件', evt);
    })
  }
}
</script>

<style scoped>
  /*局部 css*/
  .title {
    font-size: 24px;
  }

  .notifications {
      display: block;
      width: 300px;
      position: fixed;
      z-index: 5000;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 30px;
  }
</style>
