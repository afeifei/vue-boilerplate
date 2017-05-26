<template>
  <div class="block">
    <h3 class="title">{{title}}</h3>
    <div>
      <button @click="jump">跳转到 /m2/m21</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'M22Vue',
  data () {
    return {
      title: '编程式导航'
    }
  },
  methods: {
    jump() {
      // 使用 name 来传递 params
      this.$router.push({ name: 'namem21', params: {userid: 233}, query: {name: 'gexufei'} });

      // 简单形式
      // this.$router.push('/m2/m23');

      // repleace vs push, router.push 很像，唯一的不同就是，它不会向 history 添加新记录
    }
  }
}
</script>

<style scoped>

</style>
