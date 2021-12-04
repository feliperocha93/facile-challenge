const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

const server = app.listen(PORT, () => console.log(`🔥 Server started at http://localhost:${PORT}`));

module.exports = server;
