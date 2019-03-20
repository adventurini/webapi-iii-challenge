const express = require('express');
const helmet = require('helmet');

const server = express();
const postRouter = require('./data/routers/post-router');
const userRouter = require('./data/routers/user-router');


server.use(express.json());
server.use(helmet);
server.use('/api/posts', postRouter);
server.use('/api/users', userRouter);


module.exports = server;