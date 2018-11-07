<template>
  <div id="app">
    <img alt="Vue logo" src="https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png">
    <PokemonList v-bind:number="8" />
  </div>
</template>

<script>
import PokemonList from "./components/PokemonList";

export default {
  name: "app",
  components: {
    PokemonList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 auto;
  max-width: 800px;
}
</style>
