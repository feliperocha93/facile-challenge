const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: process.env.NODE_ENV === 'test' ? 'facile_challenge' : 'facile_challenge_prod',
});

client.connect();

async function query(q, values) {
  const { rows } = await client.query(q, values);
  return rows;
}

function disconnect() {
  client.end();
}

module.exports = { query, disconnect };
