<template>
    <div>
      <router-link to="/">Back</router-link>
      <PokemonList v-bind:number="8" />
    </div>
</template>

<script>
import PokemonList from "../components/PokemonList";

export default {
  components: {
    PokemonList
  },
  head: {
    title: {
      inner: "All da poke"
    }
  },
  name: "AllDaPokePage"
};
</script>

<style>
</style>
