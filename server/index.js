const express = require("express");
const http = require('http');
const socketIO = require('socket.io');

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '../../public')));
app.use(index);

const server = http.createServer(app);

const io = socketIO(server);


let interval;

io.on('connection', (socket) => {
  console.log(socket)
  console.log('New client connected');
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on('disconnect', () => {
    console.log('Client has disconnected');
    clearInterval(interval);
  });
});

const getApiAndEmit = (socket) => {
  const response = new Date();
  //emits a new message. will be 'consumed' by the client
  socket.emit('FromAPI', response);
};

server.listen(port, () => console.log(`listening on port ${port}`));

// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });
