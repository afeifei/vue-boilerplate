<template>
  <div class="block">
    <Navbar />
    <UploadVue v-bind="uploadInfo"/>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar';
import UploadVue from 'components/common/upload';

export default {
  name: 'M10Vue',
  components: {
    Navbar,
    UploadVue
  },
  data () {
    return {
      uploadInfo: {
        // uploadId: 'upload1',
        uploadServer: '/main/img',
        uploadError: function() {
          console.log('error');
        },
      }
    }
  },
  methods: {

  },

  mounted() {

  },
  computed: {

  }
}
</script>

<style scoped>


</style>
