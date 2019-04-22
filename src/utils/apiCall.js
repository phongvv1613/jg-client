const axios = require('axios');

const client = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    "Content-Type": "application/json"
  }
})

export default client;