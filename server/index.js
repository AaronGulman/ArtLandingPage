const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')



const server = express();

server.use(cors());

const PORT = process.env.PORT || 3000;

server.use(express.static(path.join(__dirname,"../client/public")))


server.listen(3000,console.log(`The server is running on ${PORT}`))
