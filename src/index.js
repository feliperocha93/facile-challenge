const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

const server = app.listen(PORT, () => console.log(`🔥 Server started at http://localhost:${PORT}`));

app.get('/', (request, response) => {
  response.send('<h1>The server is running</h1>');
});

module.exports = server;
