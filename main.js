"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var http = require('http');
var cors = require('cors');
var Server = require('socket.io').Server;
app.use(cors());
var server = http.createServer(app);
var io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});
io.on('connection', function (socket) {
    console.log("User connected ".concat(socket.id, " ").concat(socket.name));
});
server.listen(8000, function () { return console.log("Listening at :8000..."); });
