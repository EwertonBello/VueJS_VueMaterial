<template>
  <div>
    <md-content v-show="this.$route.path == '/'" id="app">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>Pressione o botão abaixo para Entrar</h1>
      <md-button
        @click="abrirFilmes()"
        style="width: 30vw; height: 6vh; background-color: #2c3e50; color: #FFFFFF; font-size: 1.3em; font-weight: bold;"
        class="md-raised md-secondary"
      >INICIAR</md-button>
    </md-content>
    <router-view v-show="this.$route.path != '/'"></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    abrirFilmes() {
      this.$router.push("/filmes");
      // this.$router.push({name:'filmes', params: {otherProp: {"a": "b"}}});
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #ffffff;
  font-size: 2vh;
  background-color: #282c34;
  padding-top: 22vh;
  height: 100vh;
}
</style>
