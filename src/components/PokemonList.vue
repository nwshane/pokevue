<template>
<div>
<ul>
    <li v-for="pokemon in pokemonList" :key="pokemon.id">
      <h2>
        {{pokemon.name}}
      </h2>
    </li>
</ul>
</div>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pokemonList: null
    };
  },
  async mounted() {
    const pokemonUrls = (await axios("https://pokeapi.co/api/v2/pokemon/")).data
      .results;

    const pokemonDataList = await Promise.all(
      pokemonUrls.slice(0, 5).map(result => axios(result.url))
    );

    this.pokemonList = pokemonDataList.map(pokemon => pokemon.data);
  }
};
</script>

<style scoped>
div {
  margin: 0 auto;
  max-width: 800px;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
