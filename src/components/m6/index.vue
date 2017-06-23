<template>
  <div class="block">
    <Navbar />
    <LoadingBar :id="'loading-bar1'" :customClass="'loading-bar'" :progress="progress" :onProgressDone="handleProgressDone"/>
  </div>
</template>

<script>
import LoadingBar from './child';
import Navbar from 'components/common/navbar';

export default {
  name: 'M6Vue',
  components: {
    LoadingBar,
    Navbar
  },
  data () {
    return {
      name: 'lushijie',
      progress: 90
    }
  },
  methods: {
    handleProgressDone(args, event) {
      console.log('handleProgressDone', args, event);
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
