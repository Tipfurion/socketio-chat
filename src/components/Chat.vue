
<template>

<div class="row chat-wrapper">
<button class="fix" @click="d">sssssssss</button>
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
  <div class="col m2 hide-on-med-and-down " >
    <ul class="collection with-header">
      <li class="collection-header"><h4>Online users</h4></li>
      <li class="collection-item">user</li>
      <li class="collection-item">user</li>
      <li class="collection-item">user</li>
      <li class="collection-item">user</li>
      <li class="collection-item">user</li>
      <li class="collection-item">user</li>
      <li class="collection-item">user</li>
      <li class="collection-item">user</li>
    </ul>   
  </div>


</div>          


</template>

<script>

import message from './Message.vue'
export default {
  name: 'Chat',
  components: {
    message
  },
  data:function(){
    return{
      messages:[
        {text:"hello",username:"user",isMine:false,},
        {text:"Hi!",username:"me",isMine:true,},

      ]
    }
  },
  methods:{
    c:function(){
      let a = {text:"ss!",username:"ss",isMine:Math.round(Math.random())}
      this.messages.push(a)
      
    },
    d:async function(){
      let result = await fetch("/api/test")
      console.log(result);
      
    },
    scrollBottom:function() {
      if(window.scrollY + window.innerHeight+400>=document.body.scrollHeight)
      {

        //console.log(this.$el.parentElement.clientHeight+this.$el.parentElement.scrollTop);
        //console.log(this.$el.parentElement.scrollHeight-this.$el.parentElement.scrollTop)
        //console.log(window.outerHeight);
        //console.log(this.$el.parentElement.scrollHeight);
        console.log(window.scrollY + window.innerHeight+200);
        console.log(document.body.scrollHeight);
        console.log('---');
        
        
        
               
        window.scrollTo({
          top:this.$el.parentElement.scrollHeight,
          behavior:"smooth",
        })  
      }
    
    },
  },
  created:function(){
    this.$on("message-mounted",this.scrollBottom)
  },
  mounted: function () {
      
  },
  watch: {
    messages: function (val) {
     //window.scrollTo( 0, this.$el.parentElement.scrollHeight+10000 )
    // window.scrollBy(0, this.$el.parentElement.scrollHeight);
    //window.scroll(0,100000)
   // setTimeout(()=>{1000)

  }
}
}
</script>
