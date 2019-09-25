<template>
  <div>
    <div id="sp">
      <md-progress-spinner
        v-show="loading"
        class="md-tranparent"
        :md-diameter="90"
        :md-stroke="10"
        md-mode="indeterminate"
      />
    </div>
    <md-list>
      <md-list-item v-for="filme of filmes" :key="filme.episode_id" @click="abrirDetails(filme)">
        <md-avatar>
          <img :src="image" alt="Logo">
        </md-avatar>

        <span class="md-list-item-text">{{filme.title}}</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import Filme from "../services/filmes";

export default {
  name: "ListaAPI",
  data() {
    return {
      Film: {
        title: "",
        opening_crawl: "",
        image: ""
      },
      loading: true,
      filmes: [],
      image:
        "https://www.desktopbackground.org/p/2014/03/24/736572_star-wars-logo-wallpapers-wallpapers-cave_1600x900_h.png"
    };
  },
  methods: {
    abrirDetails(filme) {
      this.Film = {
        title: filme.title,
        opening_crawl: filme.opening_crawl,
        image: this.image
      };
      this.$router.push({ name: "details", params: { filme: this.Film } });
    }
  },
  mounted() {
    Filme.listar()
      .then(resp => {
        this.loading = false;
        this.filmes = resp.data.results;
      })
      .catch(e => {
        // console.log('erro: '+e);
        this.loading = false;
        alert(e);
        this.$router.push("/");
      });
  }
};
</script>

<style>
#sp {
  position: absolute;
  left: 50%;
  margin-top: 35vh;
  margin-left: -50px;
  --md-theme-default-primary: #000;
}
</style>