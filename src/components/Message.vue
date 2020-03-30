<template>
<transition name="slide">
    <li class="col s6 chat-box " v-show="created">
        <h5>{{username}}</h5>
            <pre class="" >{{text}}</pre>
        <p class="right-align timestamp">12:00</p>
    </li>  
</transition>  
</template>

<script>


export default {
    name: 'Message',
    props:['index'], 
    data:function(){
        return{
        text:'',
        username:'',
        isMine:false,
        created:false,
        timestamp:Date.now()
        }
    },
    beforeCreate:function() {
        this.created = false;
    },
    created:function(){
        let parent = this.$parent
        this.username = parent.messages[this.index].username
        this.text = parent.messages[this.index].text
        this.isMine =  parent.messages[this.index].isMine
        
    },
    mounted:function(){
        if(this.isMine){
            this.$el.classList.add("offset-s6")
        }
        this.created=true;
    },
    updated:function(){

        this.$parent.$emit("message-mounted")
    }
    
}
</script>
