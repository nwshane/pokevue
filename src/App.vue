<template>
  <div id="app">
    <HomePage />
    <AllDaPokePage />
  </div>
</template>

<script>
import HomePage from "./pages/HomePage";
import AllDaPokePage from "./pages/AllDaPokePage";

export default {
  name: "app",
  components: {
    HomePage,
    AllDaPokePage
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
