<template>
  <div class="block">
    M5
    <Menu :propMenu="name" v-on:update="handleUpdate">
      <div slot="header">header</div>
      <div slot="footer">footer</div>
    </Menu>
  </div>
</template>

<script>
import Menu from './menu'
export default {
  name: 'M5Vue',
  components: {
    Menu
  },
  data () {
    return {
      name: 'lushijie'
    }
  },
  methods: {
    handleUpdate(args, e) {
      console.log(args, e);
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
