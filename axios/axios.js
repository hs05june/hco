const axios = require('axios');

const URL = "http://localhost:8080/api"

const instance = axios.create({
  baseURL: process.env.BACKEND_URL || URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = instance;