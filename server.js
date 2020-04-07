let express = require('express');
let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
let user = 'USER FROM SERVER'
let activeUsers=[]
const config = require('./config')

app.use(express.static(__dirname +'/dist'));

io.on('connection', function(socket){
  
  socket.on('SEND_NAME',(username)=>{
    let name;
    if(!username){
      name = 'User '+socket.id.substr(0,4)
    }
    name = username;
    if(activeUsers.some(e => e.name === name)){
      name=`${name}_${socket.id.substr(0,4)}`
    }
    if(activeUsers.some(e => e.id=== socket.id)){
      activeUsers.forEach((user,i) => {
        if(user.id===socket.id)
        {
          activeUsers[i].name = name;
        }
      });
    }
    else{
      activeUsers.push({name:name,id:socket.id})
    }
 
    socket.emit("GET_NAME", name)
    io.sockets.emit('SEND_USERS', activeUsers);
    console.log(name+' connected');
  });
  socket.on('disconnect', () => {
    activeUsers.forEach((user,i) => {
      if(user.id==socket.id)
      {
        console.log(activeUsers[i].name+" disconnected");
        activeUsers.splice(i,1);
      }
    });
    socket.broadcast.emit('SEND_USERS', activeUsers);
  });
  socket.on('SEND_MESSAGE', function(data) {
    socket.broadcast.emit('MESSAGE', data);
  });
});

http.listen(config.port, function(){
  console.log('listening on :'+config.port);
});