<template>
  <div class="block">
    M6
    <LoadingBar :id="'loading-bar1'" :customClass="'loading-bar'" :progress="progress" :onProgressDone="handleProgressDone"/>

    <Pagination v-bind="pageInfo"/>
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
      progress: 90,
      pageInfo: {
        totalPage: 100,
        currentPage: 50,
        onPageClick: function(currentPage, pageSize, evt) {
          console.log(currentPage, pageSize, evt);
        }
      }
    }
  },
  methods: {
    handleProgressDone(args, event) {
      console.log('handleProgressDone', args, event);
    },
    onPageClick(currentPage, pageSize, evt) {
      console.log(currentPage, pageSize, evt);
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
