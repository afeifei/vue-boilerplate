<template>
  <div class="block">
    <h3 class="title">{{title}}</h3>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'M22Vue',
  data () {
    return {
      title: '组件内路由钩子'
    }
  },
  methods: {
  },

  beforeRouteEnter (to, from, next) {
    // 因为当钩子执行前，组件实例还没被创建, 不！能！获取组件实例 `this`
    // console.log('m24 beforeRouteEnter', to, from, next);
    //console.log(to.meta);
    next();
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用, 可以访问组件实例 `this`
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // console.log('m24 beforeRouteUpdate', to, from, next);
    next();
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用,可以访问组件实例 `this`
    // console.log('m24 beforeRouteLeave', to, from, next);
    next();
  }
}
</script>

<style scoped>

</style>
