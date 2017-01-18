<template>
  <div class="block" ref="pp">
    <h3 class="title">{{ msg }}</h3>
    <p>组件传递的prop = {{ propMsg }}</p>

    <button v-on:click="childButtonClick1"> {{counter1}}</button>
    <button v-on:click="childButtonClick2"> {{counter2}}</button>

    <button v-on:click="childButtonClick3"> Bus总线测试 </button>

    <button v-on:click="childButtonClick4"> Refs测试 </button>
  </div>
</template>

<script>
export default {
  name: 'T0Child',
  props: {
    propMsg: [String, Number]
  },
  data () {
    return {
      counter1: 0,
      counter2: 0,
      msg: 'This is T0Child'
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
    },
    // 使用Bus总线触发相应的事件
    childButtonClick3 () {
      this.$root.bus.$emit('busEventTest', 'This is event from T0Child !')
    },
    childButtonClick4 (evt) {
      this.$emit('childClick4', evt)
    }
  },
  mounted () {
    console.log('T0Child\'s parent msg =', this.$parent.$data.msg)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
