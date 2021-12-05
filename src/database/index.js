const { Client } = require('pg');

const productionClient = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const testClient = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'facile_challenge',
});

const client = process.env.NODE_ENV === 'test' ? testClient : productionClient;

client.connect();

async function query(q, values) {
  const { rows } = await client.query(q, values);
  return rows;
}

function disconnect() {
  client.end();
}

module.exports = { query, disconnect };
