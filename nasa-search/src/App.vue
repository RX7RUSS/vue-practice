<template>
  <div id="app">
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg">
    <Search/>
  </div>
</template>

<script>
import Search from './components/Search'

export default {
  name: 'App',
  components: {
    Search
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 80px;
}
</style>
