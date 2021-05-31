const express = require('express');
const path = require('path');
var history = require('connect-history-api-fallback');

const port = 2000;

const app = express();
app.use(history());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(__dirname, '/dist/index.html');
});

app.listen(port, () => {
  console.log('Listening on port' + port);
});
