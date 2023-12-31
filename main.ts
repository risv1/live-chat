import { Request, Response } from "express";

const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors())

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket: any) => {
    console.log(`User connected ${socket.id} ${socket.name}`);
})

server.listen(8000, ()=> console.log("Listening at :8000...") );