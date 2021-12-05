const { Client } = require('pg');

const productionClient = new Client({
  host: 'ec2-184-73-25-2.compute-1.amazonaws.com',
  port: 5432,
  user: 'bubkjefprgiefp',
  password: '22067a846151d999e932470add0cb5a58d9455668c19ec5169a0f7ed3542af1e',
  database: 'd4mpjsfgufodrn',
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
