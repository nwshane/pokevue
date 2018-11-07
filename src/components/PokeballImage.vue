<template>
  <img alt="Vue logo" src="https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png" @mouseover="showText = true" @mouseleave="showText = false">
</template>

<script>
export default {};
</script>

<style>
img {
  -webkit-animation: spin 6s linear infinite;
  -moz-animation: spin 6s linear infinite;
  animation: spin 6s linear infinite;
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
