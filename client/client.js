'use strict';
const express = require('express');
// Constants
const PORT = 8081;
const MESSAGE = process.env.CLIENT_MESSAGE;
const BACKEND_SERVICE = process.env.BACKEND_SERVICE;
const BACKEND_PORT = process.env.BACKEND_PORT;

// App
const app = express();
app.get('/', (req, res) => {
  console.log('client req :>> ', req);
  res.send(`Client Message: ${MESSAGE}\nBackend Service Address: ${BACKEND_SERVICE}\nBackend Port: ${BACKEND_PORT}\n`);
});
app.listen(PORT);
console.log(`Started client.js with port:${PORT}`);