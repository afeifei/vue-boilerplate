<template>
  <div class="t0">
    <p v-if="seen" v-bind:data-msg="msg">{{ msg }}</p>
    <ul>
      <li v-for="todo in todos" v-on:click="handleClick">
        {{ todo.text }}
      </li>
    </ul>
    <Test propmsg="hello"></Test>
  </div>
</template>

<script>
import Test from './Test'

export default {
  name: 't0',
  data () {
    return {
      msg: 'This is T0',
      seen: true,
      todos: [
        {text: 'NO1'},
        {text: 'NO2'}
      ]
    }
  },
  components: {
    Test: Test
  },
  methods: {
    handleClick: function (evt) {
      console.log(evt.target.innerText)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.t0 p {
  color: #456;
}
</style>
