import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay,faRedo,faPause,faAngleRight,faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueAnime from 'vue-animejs';
 
library.add(faPlay,faRedo,faPause,faAngleRight,faAngleLeft);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAnime)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
