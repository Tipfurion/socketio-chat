
<template>
<div>
<navbar></navbar>
<div class="row chat-wrapper">
  <div class="col l2 s0 m0"></div>
  <div class="col l7 s12 m12" >
      <div class="row">
            <ul>
               <message v-for="(message, i) in messages" :index=i :key=message.timestamp></message>
            </ul>
      </div>
      <div style="height:100px;" ></div>
  </div>
  
  <div class="col m1 hide-on-med-and-down " ></div>
 
   <chat-input></chat-input>
</div>
</div>          


</template>

<script>

import message from './Message.vue'
import chatInput from './ChatInput.vue'
import navbar from './Navbar.vue'
export default {
  name: 'Chat',
  components: {
    message,
    chatInput,
    navbar
  },
  data:function(){
    return{
      user:"User",
      messages:[


      ]
    }
  },
  methods:{
    showMyMessage:function(message){  
      this.messages.push({text:message,username:this.user,isMine:true})
    },
    scrollBottom:function() {
      if(window.scrollY + window.innerHeight+400>=document.body.scrollHeight)
      {        
        window.scrollTo({
          top:this.$el.parentElement.scrollHeight,
          behavior:"smooth",
        })  
      }
    
    },
    sendMessage:function(text){
      this.$socket.emit('SEND_MESSAGE', {text:text,user:this.user})
    }
  },
  created:function(){
    this.$on("MESSAGE-MOUNTED",this.scrollBottom)
    this.$on("SHOW-MY-MESSAGE",this.showMyMessage)
    this.$on("send-message",this.sendMessage)
  },
  sockets: {
      connect: function () {
        this.$socket.emit('SEND_NAME', this.user)
      },
      MESSAGE: function(data) {  
        this.messages.push({text:data.text,username:data.user,isMine:false})
      },
      GET_NAME:function(name){
        this.user = name;        
      }
  },
}
</script>
