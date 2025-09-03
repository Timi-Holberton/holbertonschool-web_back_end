const express = require('express');

const app = express();

// Route pour /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Écoute sur le port 1245
app.listen(1245);

module.exports = app;
