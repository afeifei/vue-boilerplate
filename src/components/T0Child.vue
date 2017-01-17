<template>
  <div class="t0child block">
    <h3 class="title">t0child</h3>
    <p>子组件自定义prop = {{ propMsg }}</p>
    <button v-on:click="childButtonClick1"> {{counter1}}</button>
    <button v-on:click="childButtonClick2"> {{counter2}}</button>
  </div>
</template>

<script>
export default {
  name: 't0child',
  props: {
    propMsg: [String, Number]
  },
  data () {
    return {
      counter1: 0,
      counter2: 0
    }
  },
  methods: {
    childButtonClick1 (evt) {
      this.counter1 += 1
      this.$emit('childClick', evt)
    },
    childButtonClick2 (evt) {
      this.counter2 += 1
      this.$emit('childClick', evt)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
