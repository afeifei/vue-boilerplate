<template>
  <div class="block">
    <Navbar />
    <button class="pure-button" @click="handleClick">notification</button>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar';

//https://github.com/euvl/vue-notification
export default {
  name: 'M9Vue',
  components: {
    Navbar
  },
  data () {
    return {

    }
  },
  methods: {
    handleClick: function() {
      this.$notify({
        title: 'Important message',
        type: 'warning',
        duration: 3000,
        text: 'Hello user! This is a notification!'
      });
    }
  },

  mounted() {

  },
  computed: {

  }
}
</script>

<style scoped>


</style>
