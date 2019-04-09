import app from './express';

const http = require('http');
const socketIO = require('socket.io');
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
    console.log('User connected')

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })
})

export default server;