<template>
  <div id="app">
    <chat></chat>   
  </div>
</template>

<script>
import navbar from './components/Navbar.vue'
import chat from './components/Chat.vue'
import message from './components/Message.vue'
import chatInput from './components/ChatInput.vue'

export default {
  name: 'App',
  components: {
    navbar,
    chat,
    message,
    chatInput
    
  }
}
</script>

<style>

.chat-box{

  border:1px solid #e0e0e0;
  border-radius: 10px;
  margin: 5px;
  height: 50%;
}
.chat-wrapper{
  overflow-y: auto;
  

}
body{
  overflow-x: hidden;
}
pre {
    overflow: hidden;
    word-wrap: break-word;
    white-space: pre-wrap;
    
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;
   }
.timestamp{
  color: lightslategrey;
}
.chat-input{
  position: fixed;
  bottom: 0;
  border:1px solid #9e9e9e;
  border-radius: 10px;
  background-color: white;
}
.my-message{
 background-color: #abe5ff;
}

.slide-enter-active, .slide-leave-active
{
transition:  .1s;
}
.slide-enter {
  transform: translate(-100%, 0);

}
.slide-leave-to {
  transform: translate(100%, 0);
}
.fix{
  position: fixed;
  top:200px;
  right: 200px;
  z-index: 1000;
}
   .input-field textarea:focus + label {
     color: #29b6f6 !important;
}
   .input-field textarea:focus {
     border-bottom: 1px solid #29b6f6!important;
     box-shadow: 0 1px 0 0 #29b6f6 !important;
   }
   .input-field input[type=text]:focus {
     border-bottom: 1px solid #29b6f6!important;
     box-shadow: 0 1px 0 0 #29b6f6 !important;
   } 

</style>
