const express = require('express');

const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(routes);

const server = app.listen(PORT, () => console.log(`🔥 Server started at http://localhost:${PORT}`));

module.exports = server;
