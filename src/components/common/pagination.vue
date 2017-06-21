<template>
  <div class="vue-pagination">
    <a :class="{current: currentPage == item, normal: (currentPage != item && item != ellipsis), ellipsis: item == ellipsis}" v-for="item in calcPage" @click="pageClick(item, $event)">{{ item }}</a>
  </div>
</template>

<script>
  export default {
    name: 'PaginationVue',
    props: {
      ellipsis: {type: String, default: '...'},
      totalPage: {type: Number, default: 40},
      currentPage: {type: Number, default: 10},
      pagePad: {type: Number, default: 2},
      pageSize: {type: Number, default: 10},
      preText: {type: String, default: '前一页'},
      nextText: {type: String, default: '后一页'},
      firstText: {type: String, default: '首页'},
      lastText: {type: String, default: '尾页'}
    },
    components: {

    },
    computed: {
      calcPage: function () {
        let pageRange = 2 * this.pagePad + 5;
        let pageList = [];
        if(this.totalPage < pageRange) {
          for(let i = 1; i <= this.totalPage; i++){
            pageList.push(i);
          }
          return pageList;
        }

        let leftPageNum = 0;
        let rightPageNum = 0;
        let frontList = [], endList = [];

        // 计算前、后部分占位个数
        leftPageNum = Math.min(this.currentPage - 1, this.pagePad + 2);
        rightPageNum = pageRange - leftPageNum - 1;

        // 后半部分占位过多，补充到前半部分
        if(rightPageNum > (this.totalPage - this.currentPage)) {
          rightPageNum = rightPageNum - (rightPageNum - (this.totalPage - this.currentPage));
          leftPageNum = pageRange - rightPageNum - 1;
        }

        //倒数第二个为...
        for(let i = 0; i <= leftPageNum; i++) {
          if(i === leftPageNum - 1) {
            frontList.unshift('...');
          }else {
            frontList.unshift( this.currentPage - i);
          }
        }

        //倒数第二个为...
        for(let i = 1; i <= rightPageNum; i++) {
          if(i === rightPageNum - 1) {
            endList.push('...');
          }else {
            endList.push( this.currentPage + i);
          }
        }

        //前半部分...处理
        let frontEllipsisPos = frontList.indexOf('...');
        if(frontEllipsisPos > -1) {
          if(frontList[frontEllipsisPos -1] === 1) {
            frontList[frontEllipsisPos] = 2;
          }else {
            frontList[frontEllipsisPos -1] = 1;
          }
        }

        //后半部分...处理
        let endEllipsisPos = endList.indexOf('...');
        if(endEllipsisPos > -1) {
          if(endList[endEllipsisPos + 1] === this.totalPage) {
            endList[endEllipsisPos] = this.totalPage - 1;
          }else {
            endList[endEllipsisPos + 1] = this.totalPage;
          }
        }
        return (frontList.concat(endList));
      }
    },
    methods:{
      pageClick: function(page, evt){
        console.log(page, evt);
      }
    }
  }
</script>

<style scoped>
  .vue-pagination {
    text-align: center;
    padding: 20px 0;
  }
  .vue-pagination a{
    float: left;
    background-color: #fff;
    border: 1px solid #bfbfbf;
    padding: 2px 8px;
    color: #333;
    border-radius: 3px;
    margin-right: 10px;
    cursor: pointer;
  }
  .vue-pagination a.current {
    background: #01a050;
    color: #fff;
    border-color: #01a050;
  }
  .vue-pagination a.ellipsis {
    cursor: default;
  }
  .vue-pagination a.disabled {
    cursor: default;
    background: #d2d2d2;
    color: #fff;
  }
  .vue-pagination a.disabled:hover {
    color: #fff;
  }
</style>
