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
  align-items: center;
  height: 100vh;
}
</style>
