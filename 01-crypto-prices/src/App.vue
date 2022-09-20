<template>
  <div class="container">
    <div class="row">
      <h2>Vue Coin Market</h2>

      <form @submit.prevent="searchCoin">
        <input
          type="text"
          class="form-control text-light my-4 bg-dark"
          placeholder="Search"
          v-model="textSearch"
          @keyup="onKeyup"
          autofocus
        />
      </form>

      <table class="table table-hover table-dark text-light">
        <thead>
          <tr>
            <th v-for="(title, index) in titles" :key="index">{{ title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(coin, index) in filteredCoins" :key="index">
            <td class="text-muted">{{ index }}</td>
            <td>
              <img
                :src="coin.image"
                :alt="coin.name"
                style="width: 2rem"
                class="me-2"
              />
              <span>{{ coin.name }}</span>
              <span class="ms-2 text-muted text-uppercase">
                {{ coin.symbol }}
              </span>
            </td>
            <!--  -->
            <td>{{ coin.current_price.toLocaleString() }}</td>
            <!--  -->
            <td
              :class="[
                coin.price_change_percentage_24h > 0
                  ? 'text-success'
                  : 'text-danger',
              ]"
            >
              {{ coin.price_change_percentage_24h }}
            </td>
            <!--  -->
            <td>{{ coin.total_volume.toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getCoinsList } from './api/home';

export default {
  name: 'App',
  data() {
    return {
      coins: [],
      filteredCoins: [],
      titles: ['#', 'Coin', 'Price', 'Price Change', '24h Volume'],
      textSearch: '',
    };
  },
  async mounted() {
    // const res = await fetch(
    //   'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    // );
    try {
      const res = await getCoinsList();
      const data = res.data;
      //
      this.coins = data;
      this.filteredCoins = data;
      console.log(this.coins);
    } catch (error) {
      console.log('error:', error);
    }
  },
  methods: {
    searchCoin() {
      this.filteredCoins = this.coins.filter(
        coin =>
          coin.name.toLowerCase().includes(this.textSearch.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(this.textSearch.toLowerCase()),
      );
    },
    onKeyup() {
      if (this.textSearch.length === 0) {
        this.filteredCoins = this.coins;
      }
    },
  },
};
</script>

<style scoped>
/*  */
</style>
