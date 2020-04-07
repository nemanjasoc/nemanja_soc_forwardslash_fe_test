<template>
  <div id="app">
    <app-header></app-header>
    <app-banner></app-banner>
    <app-table></app-table>
    <app-box></app-box>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/header/Header.vue';
import Banner from './components/content/Banner.vue';
import Table from './components/content/Table.vue';
import Box from './components/content/Box.vue';
import Footer from './components/footer/Footer.vue';

export default {
  components: {
    appHeader: Header,
    appBanner: Banner,
    appTable: Table,
    appBox: Box,
    appFooter: Footer
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
