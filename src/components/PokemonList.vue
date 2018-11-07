<template>

<ul>
  <li v-for="pokemon in pokemonList" :key="pokemon.id">
    <h2>
      {{pokemon.name}}
    </h2>
  </li>
</ul>

</template>

<script>
import axios from "axios";

export default {
  props: {
    number: Number
  },
  data() {
    return {
      pokemonList: null
    };
  },
  async mounted() {
    const pokemonUrls = (await axios("https://pokeapi.co/api/v2/pokemon/")).data
      .results;

    const pokemonDataList = await Promise.all(
      pokemonUrls.slice(0, this.number).map(result => axios(result.url))
    );

    this.pokemonList = pokemonDataList.map(pokemon => pokemon.data);
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
