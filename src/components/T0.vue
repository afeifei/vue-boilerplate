<template>
  <div class="block">
    <h3 class="title">{{ msg }}</h3>
    <!-- 儿子emit到父亲 -->
    <div>
      <p>Total = {{ total }}</p>
      <T0Child prop-msg="hello" v-on:childClick="handleChildClick" ref="T0Child">
        <!-- slot分发 -->
        <p slot="cpu">英特尔</p>
        <p>匿名slot实例1</p>
        <p>匿名slot实例2</p>
      </T0Child>
    </div>
  </div>
</template>

<script>
import T0Child from './T0Child'

export default {
  name: 'T0',
  data () {
    return {
      total: 0,
      msg: 'This is T0'
    }
  },
  components: {
    T0Child: T0Child
  },
  methods: {
    // 通过在子组件上使用v-on监听子组件的事件
    handleChildClick () {
      this.total += 1
    }
  },
  mounted () {
    // 通过refs查找到child并监听相应的事件
    this.$refs.T0Child.$on('childClick4', (evt) => {
      console.log(evt)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
