<template>
  <div>
    <md-toolbar class="md-primary" style="background-color: #000000">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Filmes</span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Menu</span>
      </md-toolbar>

      <md-list>
        <md-list-item @click="abrirInicio()">
          <md-icon>home</md-icon>
          <span class="md-list-item-text">Tela Inicial</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <ListaAPI/>

  </div>
</template>

<script>

import ListaAPI from './ListaAPI.vue'

export default {
name: 'ListaFilmes',
components:{
  ListaAPI
},
data(){
      return{
        showNavigation: false
      }
    },
methods:{
    abrirInicio(){
      this.showNavigation=false
      this.$router.push("/");
    }
  }
  }
</script>

<style>
  .page-container {
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }
</style>