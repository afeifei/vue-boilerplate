<template>
  <div class="test">
    <p v-if="seen" v-bind:data-msg="msg">{{ msg }}</p>
    {{ propMsg }}
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
      msg: 'This is test',
      seen: true
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
