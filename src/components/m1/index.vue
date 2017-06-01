<template>
  <div class="block">
    <h3 class="title">{{title | addSuffix('-suffix')}}</h3>
    <div>
      <p>{{title | uppercase }}</p>
      <p v-html="rawHtml"></p>
      <p :id="bindId">:id</p>
      <p v-if="isShow">v-if</p>
      <p v-else>v-if not show</p>

      <p @click.prevent="testClick(11, $event)">@click</p>
      <p>{{clickNumFace}}</p>
      <p class="origin" :class="{active: isActive}">:class1</p>
      <p :class="classObject">:class2</p>
      <p :class="[activeClass, errorClass]">:class3</p>

      <ul id="example-1">
        <li v-for="(item, index) in list">
          {{ index }} -- {{ item.id }} -- {{ item.name }}
        </li>
      </ul>

      <ul id="example-2">
        <li v-for="(value, key) in obj">
          {{ key }} -- {{ value }}
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'M1Vue',
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
      rawHtml: '<p style="color: #f00">v-html</p>',
      bindId: 'testp',
      isShow: false,
      clickNum: 0,
      isActive: true,
      classObject: {
        active: true,
        'text-danger': true
      },
      activeClass: 'active',
      errorClass: 'text-danger'
    }
  },
  // 自定义方法
  methods: {
    testClick (aa, evt) {
      console.log(aa, evt);
      this.clickNum ++;
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
    this.$nextTick(function () {
      // DOM Ready
      // `this` 绑定到当前实例
    })
  }
}
</script>

<style scoped>

</style>
