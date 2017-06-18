<template>
  <div class="block">
    <!-- 子组件 -->
    <Navbar />

    <!-- 带参数过滤器 -->
    <h3 class="title">{{title | uppercase}}</h3>

    <div>
      <!-- 无参数过滤器 -->
      <p>{{title | addSuffix('-suffix')}}</p>

      <!-- 计算属性 -->
      <p>{{clickNumFace}}</p>

      <!-- 事件点击 -->
      <p @click.prevent="testClick(123, $event)" class="pure-button">@click 点击我</p>

      <!-- 调用Model -->
      <p @click.prevent="modelClick" class="pure-button">点击我</p>

      <!-- 数组 -->
      <ul id="example-1">
        <li v-for="(item, index) in list">
          {{ index }} -- {{ item.id }} -- {{ item.name }}
        </li>
      </ul>

      <!-- 对象 -->
      <ul id="example-2">
        <li v-for="(value, key) in obj">
          {{ key }} -- {{ value }}
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar';
import M1Model from 'models/m1';

export default {
  name: 'M1Vue',
  components: {
    Navbar
  },
  data () {
    return {
      title: 'Vue 过滤器',
      list: [
        {id: '001', name: 'gexufei'},
        {id: '002', name: 'lushijie'}
      ],
      obj: {
        a: 'aaa',
        b: 'bbb'
      },
      clickNum: 0
    }
  },
  // 自定义方法
  methods: {
    testClick(aa, evt) {
      console.log(aa, evt);
      this.clickNum ++;
    },
    modelClick() {
      console.log(M1Model);
      M1Model.insertDb();
    }
  },
  // 组件内过滤器
  filters: {
    uppercase(value) {
      return value && value.toUpperCase();
    }
  },
  // 计算属性
  computed: {
    // 不能使用箭头函数， 否则 this 不再指向vm实例， 计算属性默认只有getter,可以支持setter
    clickNumFace() {
      return 'Total=' + this.clickNum;
    }
  },

  // 生命周期
  // beforeCreate,created
  // beforeMount,mounted
  // beforeUpdate,updated
  // activated,deactivated
  // beforeDestroy,destroyed
  mounted() {
    // Vue-resource 使用
    // Vue.http.get('/test');
    // this.$http.get('/someUrl').then(response => {
    //    // success callback
    // }, response => {
    //    // error callback
    // });

    this.$nextTick(function () {
      // DOM Ready, `this` 绑定到当前实例
    })
  }
}
</script>

<style scoped>
  /*局部css*/
</style>
