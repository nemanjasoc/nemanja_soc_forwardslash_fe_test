<template>
  <div id="app">
    <app-header></app-header>
    <app-banner></app-banner>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Banner from './components/Banner.vue';

export default {
  components: {
    appHeader: Header,
    appBanner: Banner
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}
</style>
