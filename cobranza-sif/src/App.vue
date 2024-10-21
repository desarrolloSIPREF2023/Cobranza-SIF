<template>
<!--   Plantilla principal -->
  <div id="app">
  <div class="row justify-content-center">
    <div class="col-12 col-6 mt-5">
      <img src="./assets/logo.jpeg" width="200" height="200">
    <h1 class="auth-title pt-3" style="font-size: 2.3em !important;">Iniciar Sesión</h1>
    <router-view/>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#auth #auth-left .auth-title {
    font-size: 4rem;
    margin-bottom: 1rem
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    color: #25396f;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: .5rem;
    margin-top: 0;
}
</style>
