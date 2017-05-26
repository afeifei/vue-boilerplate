<template>
  <div class="block">
    <h3 class="title">{{title | my-filter('ending') }}</h3>
  </div>
</template>

<script>
export default {
  name: 'M1Vue',
  props: [], // {}
  data () {
    return {
      title: 'Vue 过滤器'
    }
  },
  // 自定义方法
  methods: {

  },
  // 计算属性
  computed: {

  },
  // 生命周期
  // beforeCreate,created
  // beforeMount,mounted
  // beforeUpdate,updated
  // activated,deactivated
  // beforeDestroy,destroyed
  mounted() {
    this.$nextTick(function () {
      // DOM Ready
      // `this` 绑定到当前实例
    })
  }
}
</script>

<style scoped>

</style>
