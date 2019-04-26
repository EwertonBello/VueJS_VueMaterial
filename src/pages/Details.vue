<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary" style="background-color: #000000">
      <md-button class="md-icon-button" @click="voltar()">
        <md-icon>arrow_back</md-icon>
      </md-button>
      <span class="md-title">{{ filme.title }}</span>
    </md-toolbar>

    <md-card>
      <md-card-media>
        <img id="media" :src="filme.image" alt="Logo">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ filme.title }}</div>
        <div class="md-subhead">{{ filme.opening_crawl }}</div>
      </md-card-header>
    </md-card>

  </div>
</template>

<script>
export default {
    name: 'Details',
    data() {
      if(!this.$route.params.filme){
        return{
        filme: false
        }
      }else{
        return{
        filme: this.$route.params.filme
        }
      }
    },
    methods:{
  		voltar(){
  			this.$router.go(-1);
  		}
  	},
    mounted(){
      if(!this.filme){
        this.$router.push('/');
      }
    }
  }
</script>

<style>
  .page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }
  #media{
    height: 30vw;
    width: 100%;
  }
</style>