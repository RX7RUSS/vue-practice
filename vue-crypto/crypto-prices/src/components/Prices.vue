<template>
  <div class="hello">
    <div class="title">Current Crypto Prices in USD</div>
    <div id="crypto-container" v-for="(value, key) in cryptos" :key="key">
      <span class="left">{{ key }}</span>
      <span class="right">${{ value.USD }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Prices',
  data: () => ({
    cryptos: [],
    errors: []
  }),

  created () {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,XRP,XLM,ETH,NANO,BCH,BNB,LTC&tsyms=USD')
      .then(response => {
        this.cryptos = response.data
        console.log(response)
        console.log('logged status ' + response.status)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  body {
    background: #f1f1f1;
  }

  #crypto-container {
    background: white;
    width: 70%;
    margin: 0 auto 4px auto;
    padding: 1rem;
    box-shadow: 1px 1px 0 lightgrey;
    border-radius: 10px;
  }

  .title {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 800;
    background: white;
    width: 70%;
    margin: 0 auto 4px auto;
    padding: 1rem;
    box-shadow: 1px 1px 0 lightgrey;
    border-radius: 10px;
  }

  span.left {
    font-weight: bold;
  }

  span.right {
    float: right;
  }

</style>
