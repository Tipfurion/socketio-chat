let express = require('express'); // Подключаем express
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(server); 
 

http.listen(3000, function(){
    console.log('listening on *:3000');
});