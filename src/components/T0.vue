<template>
  <div class="t0">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 't0',
  data () {
    return {
      msg: 'This is T0'
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
