<template>
  <div class="container app-body">
    Menu-{{propMenu}}
    <slot name="header"></slot>
    <div @click="clickBtn" class="pure-button">点击我</div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
  export default {
    name: 'MenuVue',
    props: {
      propMenu: String
    },
    components: {

    },
    methods:{
      clickBtn(evt) {
        this.$emit('update', this.propMenu, evt);
      }
    }
  }
</script>

<style lang="">

</style>
