const express = require('express');
const app = express();
const server = require('http').createServer(app);
  const  io = require('socket.io').listen(server);
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// prepare server
app.use('/', express.static(__dirname + '/')); // redirect root
app.use('/node', express.static(__dirname + '/node_modules'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist')); // redirect bootstrap JS
app.use('/font', express.static(__dirname + '/node_modules/font-awesome'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/model', express.static(__dirname + '/model'));

 const Routes=require('./Routes.js')(app);

io.sockets.on('connection', function (socket, pseudo) {
    
    socket.on('Utilisateur',function(data){
     socket.emit('message',data);
    });

});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})