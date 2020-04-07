<template>
<div class="navbar-fixed">
  <nav>
    <div class="nav-wrapper #29b6f6 light-blue lighten-1">
      <a class="brand-logo">Chat</a>
      <ul id="nav-mobile" class="right">
          <li> <a class='dropdown-trigger '  data-target='dropdown1'>Users</a></li>
        <ul id='dropdown1' class='dropdown-content'>
          <li class="my-username">{{username}}</li>
          <li v-for="(user, i) in users" :index=i :key=i>{{user}}</li>   
        </ul>   
        <li class="user-navbar"><a class='dropdown-trigger' data-target='dropdown2'>{{username}}</a></li>
        <ul id='dropdown2' class='dropdown-content'>
          <li><h5>Change</h5></li>
          <li><div class="input-field"><input type="text" id="nameInput"></div></li>
        </ul>           
      </ul>
    </div>
  </nav>
</div>
</template>

<script>


export default {
  name: 'Navbar',
  components: {
    
  },
  data:function(){
    return{
      username:'NAME',
      users:[],
      inputEl:null,
      instances:null
    }
  },
  methods:{
    submit:function(){
      if(this.inputEl.value){
        this.username = this.inputEl.value;
        this.$socket.emit('SEND_NAME', this.username)
        this.inputEl.value=''
      }
    }
  },
  mounted:function(){
    let elems = document.querySelectorAll('.dropdown-trigger');
    this.inputEl = document.querySelector('#nameInput')
    this.instances = M.Dropdown.init(elems,{closeOnClick:false});
    this.instances[1].options.onCloseStart = this.submit;
  },
sockets: {
    SEND_USERS: function (users) {
      this.users=[]
      users.forEach(user => {
        this.users.push(user.name)
      });
    },
    GET_NAME:function(name){
      this.username = name;        
    }    
}
}
</script>
<style scoped>
.my-username{
  color: #29b6f6;
  font-weight: bold;
}
.user-navbar{
  font-weight: bold;
  padding-right: 20px;
}
li{
  
}
</style>
