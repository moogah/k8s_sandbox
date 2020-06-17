'use strict';
const express = require('express');
// Constants
const PORT = 8080; // todo: use env var
const HOST = '0.0.0.0'; // todo: this is important, localhost won't work etc
// App
const app = express();
// kubernetes readiness and liveness checks
app.get('/', (req, res) => {
  console.log('req :>> ', req);
  res.status(200).send('OK')
});

app.listen(PORT, HOST);

console.log(`Started server.js with host:${HOST} port:${PORT}`);