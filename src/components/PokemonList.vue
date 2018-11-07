<template>

<ul>
  <li v-for="pokemon in pokemonList" :key="pokemon.id">
    <PokemonItem v-bind:name="pokemon.name" />
  </li>
</ul>

</template>

<script>
import axios from "axios";

import PokemonItem from "./PokemonItem";

export default {
  props: {
    number: Number
  },
  components: {
    PokemonItem
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
