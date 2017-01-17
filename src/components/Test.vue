<template>
  <div class="test">
    <p v-if="seen" v-bind:data-msg="msg">{{ msg }}</p>
    <button v-on:click="childButtonClick">{{ propMsg }}</button>
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
    childButtonClick (evt) {
      this.counter += 1
      this.$emit('childClick', evt)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test p {
  color: #456;
}
</style>
