<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        href: "https://fonts.googleapis.com/css?family=Spicy+Rice",
        rel: "stylesheet"
      }
    ]
  },
  name: "app"
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
