<template>
  <div class="block">
    M6
    <LoadingBar :id="'loading-bar1'" :customClass="'loading-bar'" :progress="progress" :onProgressDone="handleProgressDone"/>

    <Pagination/>
  </div>
</template>

<script>
import LoadingBar from './child.js';
import Pagination from 'components/common/pagination';

export default {
  name: 'M6Vue',
  components: {
    LoadingBar,
    Pagination
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
