<template>
  <div class="block">
    <h3 class="title">{{title}}</h3>
    <div>
      <button class="pure-button" @click="btn1Click">父级 v-on 监听 $emit</button>
      <button class="pure-button" @click="btn2Click">父级 $refs 监听 $emit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'M42Vue',
  data () {
    return {
      title: 'This is M42 page!'
    }
  },
  methods: {
    // 此方式父级先收到emit的事件，之后自己才会收到
    btn1Click: function(evt) {
      this.$emit('emitM42Btn1', evt);
    },
    // 此方式自己先收到emit的事件， 之后父级才会收到
    btn2Click: function(evt) {
      this.$emit('emitM42Btn2', evt)
    }
  },
  mounted() {
    this.$on('emitM42Btn1', (evt) => {
      console.log('自己监听到 emit 事件', evt);
    });
    this.$on('emitM42Btn2', (evt) => {
      console.log('自己监听到 emit 事件', evt);
    });
  }
}
</script>


<style scoped>

</style>
