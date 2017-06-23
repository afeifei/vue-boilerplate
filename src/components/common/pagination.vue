<template>
  <div class="vue-pagination">
    <a class="pre" :class="[currentPage == 1 ? 'disabled' : '']" @click="handlePreClick($event)">{{ preText }}</a>
    <a :class="{current: currentPage == item, normal: (currentPage != item && item != ellipsis), ellipsis: item == ellipsis}" v-for="item in calcPage" @click="handlePageClick(item, $event)">{{ item }}</a>
    <a class="next" :class="[currentPage == totalPage ? 'disabled' : '']" @click="handleNextClick($event)">{{ nextText }}</a>
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
      onPageClick: {type: Function, default: function(){}}
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
            frontList.unshift(this.ellipsis);
          }else {
            frontList.unshift( this.currentPage - i);
          }
        }

        //倒数第二个为...
        for(let i = 1; i <= rightPageNum; i++) {
          if(i === rightPageNum - 1) {
            endList.push(this.ellipsis);
          }else {
            endList.push( this.currentPage + i);
          }
        }

        //前半部分...处理
        let frontEllipsisPos = frontList.indexOf(this.ellipsis);
        if(frontEllipsisPos > -1) {
          if(frontList[frontEllipsisPos -1] === 1) {
            frontList[frontEllipsisPos] = 2;
          }else {
            frontList[frontEllipsisPos -1] = 1;
          }
        }

        //后半部分...处理
        let endEllipsisPos = endList.indexOf(this.ellipsis);
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
      handlePageClick: function(current, evt){
        if(current !== this.ellipsis) {
          this.currentPage = current;
          this.onPageClick(this.currentPage, this.pageSize, evt);
        }
      },
      handleNextClick: function(evt) {
        if(this.currentPage < this.totalPage) {
          this.currentPage ++;
          this.onPageClick(this.currentPage, this.pageSize, evt);
        }
      },
      handlePreClick: function(evt) {
        if(this.currentPage > 1) {
          this.currentPage --;
          this.onPageClick(this.currentPage, this.pageSize, evt);
        }
      }
    }
  }
</script>

<style scoped>
  .vue-pagination {
    text-align: center;
    padding: 20px 0;
    user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
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
  .vue-pagination a.ellipsis:hover {
    text-decoration: none;
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
