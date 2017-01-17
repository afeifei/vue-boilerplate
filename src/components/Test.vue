<template>
  <div class="test">
    <p v-if="seen" v-bind:data-msg="msg">{{ msg }}</p>
    <button v-on:click="clickTest">{{ propMsg }}</button>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    propMsg: [String, Number]
  },
  data () {
    return {
      counter: 0,
      msg: 'This is test',
      seen: true
    }
  },
  methods: {
    clickTest () {
      this.counter += 1
      this.$emit('increment')
    }
  },
  created () {
    console.log('Test', this.propMsg)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test p {
  color: #456;
}
</style>
