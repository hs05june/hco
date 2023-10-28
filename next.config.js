const express = require("express");
const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const validate = require("./api/middleware");
const routes = require("./api/routes");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
	cors: {
	  origin: 'http://localhost:3000',
	  methods: ['GET', 'POST'],
	  credentials: true,
	},
  });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = () => {

  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(cors());
  app.use(cookieParser());
  app.disable("x-powered-by");
  app.use("/api", validate, routes);

  io.on('connection', (socket) => {
	console.log('User connected:', socket.id);
  
	socket.on('draw', (data) => {
	  socket.broadcast.emit('draw', data);
	});

	socket.on('erase', () => {
		socket.broadcast.emit('erase');
	  });
  
	socket.on('disconnect', () => {
	  console.log('User disconnected:', socket.id);
	});
  });

  server.listen(8080, () => {
    console.log("Server listening on port 8080");
  });
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DB");
    });
  return nextConfig;
};
