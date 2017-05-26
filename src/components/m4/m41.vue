<template>
  <div class="block">
    <h3 class="title">{{title}}</h3>
    <div>
      <button @click="btn1Click">普通点击事件</button>
      <button @click="btn2Click">事件总线</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'M41Vue',
  data () {
    return {
      title: 'This is M41 page!'
    }
  },
  methods: {
    btn1Click(evt) {
      console.log('普通点击事件', evt);
    },
    btn2Click(evt) {
      // 任何组件都可以去 $root 上监听这个事件
      this.$root.bus.$emit('busM41Btn2', evt);
    }
  }
}
</script>


<style scoped>

</style>
