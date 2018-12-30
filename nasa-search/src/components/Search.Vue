<template>
  <div class="hello">

    <h1>{{ msg }}</h1>

    <form v-on:submit.prevent="getResults(query)">
      <input type="text" placeholder="Type search here" v-model="query" />
    </form>

    <div class="results" v-if="results">
      <div v-for="result in results">
        <img v-bind:src="result.links[0].href" />
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Search',
  data () {
    return {
      msg: 'NASA Image Database Search',
      query: '',
      results: ''
    }
  },
  methods: {
    getResults (query) {
      axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image').then(response => {
        console.log(response.data.collection.items)
        this.results = response.data.collection.items
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.results img {
  width: 600px;
  margin: 10px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
