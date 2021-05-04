
const express = require('express');

const PORT = process.env.PORT || 3000;
const APPINDEX = 'build/index.html';

const server = express()
  .use(express.static('build'))
  .get('/', (req, res) => res.sendFile(APPINDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
