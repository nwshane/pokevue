<template>
<div>
  <router-link to="/all-da-poke">
    <img alt="Vue logo" src="https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png">
  </router-link>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
img {
  margin-bottom: 100px;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
}
@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
