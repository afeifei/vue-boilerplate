<template>
  <div class="block" ref="pp">
    <h3 class="title">{{ title }}</h3>
    <div>
      <!-- 自定义 slot 分发 -->
      <M31>
        <p slot="cpu">自定义的英特尔</p>
        <p>自定义的匿名slot实例1</p>
        <p>自定义的匿名slot实例2</p>
      </M31>

      <!-- 默认 slot 分发 -->
      <M31></M31>
    </div>
  </div>
</template>

<script>
import M31 from 'components/m3/m31';

export default {
  name: 'M3Vue',
  components: {
    M31
  },
  data () {
    return {
      title: 'Vue 内容分发'
    }
  }
}
</script>

<style scoped>

</style>
