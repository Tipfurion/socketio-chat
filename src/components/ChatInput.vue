
   
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
        
        }
    },
    methods:{
      textareaConfigure:function(){
        let textarea = document.querySelector("#message_input")
        console.log(textarea);
        
        textarea.onkeydown = function(e){
          if (e.keyCode == 13 && !e.shiftKey){  
            e.preventDefault();
          }
        }
      },
      submit:function(){

        console.log('submit!');
        
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
 /* label focus color */
   .input-field textarea:focus + label {
     color: #000;
}
/* label underline focus color */
   .input-field textarea:focus {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
</style>