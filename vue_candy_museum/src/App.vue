<template>
  <div id="app">
    <HeaderNavBar/>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderNavBar from './components/HeaderNavBar.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    HeaderNavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Emilys+Candy|Open+Sans+Condensed:300&display=swap');
#app {
  /* font-family: 'Emilys Candy', cursive,    */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* margin: 0px 1em; */
}

</style>
