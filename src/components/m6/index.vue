<template>
  <div class="block">
    M6
    <LoadingBar :id="'loading-bar1'" :customClass="'loading-bar'" :progress="progress" :onProgressDone="handleProgressDone"/>
  </div>
</template>

<script>
import LoadingBar from './child.js';

export default {
  name: 'M6Vue',
  components: {
    LoadingBar
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
