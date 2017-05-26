<template>
  <div class="block">
    <h3 class="title">{{title}}</h3>
    <M41></M41>
    <M42 v-on:emitM42Btn1="handleEmitM42Btn1" ref="refm42"></M42>
  </div>
</template>

<script>
import M41 from 'components/m4/m41';
import M42 from 'components/m4/m42';
import M43 from 'components/m4/m43';

export default {
  name: 'M4Vue',
  components: {
    M41,
    M42,
    M43
  },
  data () {
    return {
      title: 'Vue 事件'
    }
  },
  methods: {
    // 通过v-on绑定事件
    handleEmitM42Btn1(evt) {
      console.log('父级使用 v-on 监听孩子的 emit 事件', evt);
    }
  },
  mounted() {
    // 通过refs查找到child并监听相应的事件
    this.$refs.refm42.$on('emitM42Btn2', (evt) => {
      console.log('父级使用 $refs.X.$on 监听孩子的 emit 事件', evt)
    })
  }
}
</script>


<style scoped>

</style>
