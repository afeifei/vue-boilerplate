<template>
  <div class="block">
    <Navbar />
    <Pagination v-bind="pageInfo"/>
  </div>
</template>

<script>
import Pagination from 'components/common/pagination';
import Navbar from 'components/common/navbar';

export default {
  name: 'M7Vue',
  components: {
    Pagination,
    Navbar
  },
  data () {
    return {
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
