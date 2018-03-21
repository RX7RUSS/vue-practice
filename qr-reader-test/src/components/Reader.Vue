<template>
  <div class="hello">

    <h1>{{ msg }}</h1>

    <qrcode-reader class="cam-wrap" @decode="onDecode" :paused="paused">
      <div class="decoded-content">
        <b>QR Code Data {{ content }}</b>
      </div>
    </qrcode-reader>

  </div>
</template>

<script>
import { QrcodeReader } from 'vue-qrcode-reader'

export default {
  name: 'Reader',
  components: { QrcodeReader },

  data () {
    return {
      msg: 'Test of vue-qrcode-reader component',
      paused: false,
      content: ''
    }
  },
  methods: {
    onDecode (content) {
      this.paused = true
      console.log(content)
      // this.$emit('content')
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
.cam-wrap {
  display: flex;
  flex-direction: column;
  height: 400px;
}
b {
  font-size: 36px;
}
.decoded-content {
  height: 100px;
}
</style>
