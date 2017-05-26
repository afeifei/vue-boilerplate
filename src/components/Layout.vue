<template>
  <div id="app" class="block">
    <h3 class="title">{{title}}</h3>
    <navbar></navbar>
    <!-- 路由组件的容器 -->
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import navbar from 'components/common/navbar';

export default {
  name: 'Layout',
  components: {
    navbar
  },
  data () {
    return {
      title: 'Welcome to VUE\'s World'
    }
  },
  methods: {
  },
  mounted () {
    // 使用Bus总线监听孙子组件的事件
    this.$root.$data.bus.$on('busM41Btn2', (evt) => {
      console.log('Root监听到总线事件', evt);
    })
  }
}
</script>

<style scoped>

</style>
