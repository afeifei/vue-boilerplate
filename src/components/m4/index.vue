<template>
  <div class="block">
    <Navbar/>
    <h3 class="title">{{title}}</h3>
    <button class="pure-button" @click.prevent="btn1Click(11, $event)">普通点击事件</button>
    <button class="pure-button" @click="btn2Click">事件总线</button>
    <M42 v-on:emitM42Btn1="handleEmitM42Btn1" ref="refm42"></M42>
  </div>
</template>

<script>
import M42 from 'components/m4/m42';
import Navbar from 'components/common/navbar';

export default {
  name: 'M4Vue',
  components: {
    M42,
    Navbar
  },
  data () {
    return {
      title: 'Vue 事件'
    }
  },
  methods: {
    btn1Click(a, evt) {
      console.log('普通点击事件', a, evt);
    },
    btn2Click(evt) {
      // bus总线事件，任何组件都可以去 $root 上监听这个事件
      this.$root.bus.$emit('updateChannel', evt);
    },
    // 通过v-on绑定事件
    handleEmitM42Btn1(evt) {
      console.log('父级使用 v-on 监听孩子的 emit 事件', evt);
    }
  },
  mounted() {
    // 通过refs查找到child并监听相应的事件
    this.$refs.refm42.$on('emitM42Btn2', (evt) => {
      console.log('父级使用 $refs.X.$on 监听孩子的 emit 事件', evt)
    });

    this.$root.$data.bus.$on('updateChannel', (evt) => {
      console.log('M4监听到总线事件', evt);
    });
  }
}
</script>

<style scoped>

</style>
