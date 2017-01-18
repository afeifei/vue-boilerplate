<template>
  <div class="block">
    <h3 class="title">{{msg}}</h3>
    <slot name="CPU"></solt>
  </div>
</template>

<script>
export default {
  name: 'T31',
  data () {
    return {
      msg: 'This is T31'
    }
  }
}
</script>

<style scoped>

</style>
