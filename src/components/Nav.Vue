<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/t1">/t1</router-link></li>
      <li><router-link to="/t2">/t2</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Basic Router'
    }
  }
}
</script>
