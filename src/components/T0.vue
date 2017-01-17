<template>
  <div class="block">
    <h3 class="title">{{ msg }}</h3>

    <!-- 儿子emit到父亲 -->
    <div>
      <p>Total = {{ total }}</p>
      <T0Child prop-msg="hello" v-on:childClick="handleChildClick"></T0Child>
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
    handleChildClick (evt) {
      console.log(evt)
      this.total += 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
