const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req, res) {
  res.render('index');
});

io.on('connection', function(socket) {
  console.log('A new WebSocket connection has been established');
});


setInterval(function() {
  var stockprice = Math.floor(Math.random() * 1000);
  io.emit('stock price update', stockprice);
}, 50);


server.listen(8000, function() {
  console.log('Listening on :8000');
});
