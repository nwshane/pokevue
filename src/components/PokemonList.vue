<template>
<ul>
    <li>{{pokemon[0].name}}</li>
</ul>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pokemon: ["Charizard", "Bulbosaur"]
    };
  },
  async mounted() {
    const pokemonUrls = (await axios("https://pokeapi.co/api/v2/pokemon/")).data
      .results;

    const pokemonList = await Promise.all(
      pokemonUrls.slice(0, 5).map(result => axios(result.url))
    );

    this.pokemon = pokemonList.map(pokemon => pokemon.data);
    console.table(this.pokemon);
  }
};
</script>

<style>
</style>
