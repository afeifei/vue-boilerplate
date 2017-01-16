<template>
  <div class="t1">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 't1',
  data () {
    return {
      msg: 'This is T1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.t1 p {
  color: #678;
}
</style>
