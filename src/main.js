import Vue from 'vue'
import App from './App.vue'
import M from 'materialize-css' 
import "materialize-css";
import 'materialize-css/dist/css/materialize.min.css'
import config from '../config'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:'+config.port,
}))

Vue.use(M)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
