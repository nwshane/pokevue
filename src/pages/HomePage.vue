<template>
<div>
  <router-link to="/all-da-poke">
    <PokeballImage v-bind:rotate="true" @mouseover.native="showText = true" @mouseleave.native="showText = false" />
    <h1 v-show="showText">Enter the PokeVue!</h1>
  </router-link>
</div>
</template>

<script>
import PokeballImage from "../components/PokeballImage";

export default {
  name: "HomePage",
  components: { PokeballImage },
  data: () => ({
    showText: false
  })
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 30vh;
  height: 100vh;
}
h1 {
  font-family: "Spicy Rice", cursive;
  font-size: 50px;
}
a {
  text-decoration: none;
}
</style>
