import Vue from 'vue'
import App from './App.vue'
import M from 'materialize-css' 
import "materialize-css";
import 'materialize-css/dist/css/materialize.min.css'

import VueSocketIO from 'vue-socket.io'
import SocketIO from "socket.io-client"

//console.log(socketio);
//console.log(VueSocketIO);
//console.log(SocketInstance);


Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',

}))

Vue.use(M)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
