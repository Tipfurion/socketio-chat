
   
<template>   
      <div class="row " >      
        <div class="row  offset-l3 col s12 m12 l5  chat-input">   
        <div class="input-field col s12">
          <textarea id="message_input" class="materialize-textarea"  @keyup.enter="submit"></textarea>
          <label for="message_input">Message</label>
        </div>
        <div class="row">
          <button class="btn waves-effect waves-light chat-button light-blue lighten-1 col s8 offset-s2" type="submit" name="action" @click="submit">send
            <i class="material-icons right">send</i>
          </button>
        </div>       
      </div> 
</div>
</template>

<script>


export default {
    name: 'ChatInput',
    data:function(){
        return{
        textarea:null,
        messageText:''
        }
    },
    methods:{
      textareaConfigure:function(){
        this.textarea = document.querySelector("#message_input")
        this.textarea.onkeydown = function(e){
          if (e.keyCode == 13 && !e.shiftKey){  
            e.preventDefault();
          }
        }
      },
      submit:function(){
        if(this.textarea.value){
         this.$parent.$emit('send-message', this.textarea.value)
         this.$parent.$emit('SHOW-MY-MESSAGE', this.textarea.value)
         this.textarea.value=''; 
        }                    
      }
    },

    mounted:function(){
      this.textareaConfigure();
    }

    
}
</script>

<style scoped>
.chat-button{
  border-radius: 10px !important;
}

</style>