import Vue from 'vue'
import App from './App.vue'
import Filmes from './pages/Filmes.vue'
import Details from './pages/Details.vue'
import VueRouter from 'vue-router'
import { MdButton, MdContent, MdToolbar, MdIcon, MdApp, MdList, MdDrawer, MdAvatar, MdCard, MdProgress } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css' /*Esse não estava indicado na documentação, 
mas é ideal para o funcionamento do tema*/

Vue.use(VueRouter)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdToolbar)
Vue.use(MdIcon)
Vue.use(MdApp)
Vue.use(MdList)
Vue.use(MdDrawer)
Vue.use(MdAvatar)
Vue.use(MdCard)
Vue.use(MdProgress)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App },
    { path: '/filmes', component: Filmes },
    { name: 'details', path: '/details', component: Details, props: {} },
    { path: '*', redirect: '/' },
  ]
})

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
