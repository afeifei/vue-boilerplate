<template>
  <div class="t0 block">
    <h3 class="title">t0</h3>
    <p v-bind:data-msg="msg">{{ msg }}</p>
    <p>Total = {{ total }}</p>
    <!-- 儿子传递emit到父亲 -->
    <T0Child prop-msg="hello" v-on:childClick="handleChildClick"></T0Child>
  </div>
</template>

<script>
import T0Child from './T0Child'

export default {
  name: 't0',
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
    handleChildClick (evt) {
      console.log(evt)
      this.total += 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.t0 {
  border: 1px solid #056;
  padding: 20px;
}
</style>
