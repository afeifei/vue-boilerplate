<template>
  <div class="test">
    <p v-if="seen" v-bind:data-msg="msg">{{ msg }}</p>
    {{ propmsg }}
  </div>
</template>

<script>
export default {
  name: 'test',
  props: ['propmsg'],
  data () {
    return {
      msg: 'This is test',
      seen: true
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
