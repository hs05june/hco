const express = require('express');
const { json, urlencoded } = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const validate = require('./api/middleware');
const routes = require('./api/routes');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = () => {
	const app = express();
	app.use(json());
	app.use(urlencoded({ extended: true }));
	app.use(cors());
	app.disable("x-powered-by");
	app.use('/api', validate, routes);
	app.listen(8080, () => {
		console.log('Server listening on port 8080');
	})
  	mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('connected to DB')
	});
  	return nextConfig;
};