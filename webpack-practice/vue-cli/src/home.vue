<template>
  <div>
    <p>First Component: {{ greeting }}</p>
    <hr>
    <button @click="changeStatus">Change Greeting</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        greeting: 'Hello World'
      }
    },
    methods: {
      changeStatus() {
        this.greeting = 'Goodbye';
      }
    }
  }
</script>
