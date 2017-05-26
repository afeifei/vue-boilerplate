<template>
  <div class="block" ref="pp">
    <h3 class="title">{{ title }}</h3>
    <!-- 具名slot针对一个 -->
    <slot name="cpu">
      <p>默认的酷睿</p>
    </slot>
    <!-- 匿名slot针对多个 -->
    <slot>
      <div>默认的slot</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'M31Vue',
  data () {
    return {
      title: 'This is M31 page!'
    }
  }
}
</script>

<style scoped>

</style>
