const request = require('supertest');
const db = require('../../database');

const server = require('../../index');

const MAIN_ROUTE = '/encrypt';

beforeAll(() => {
  db.query('DELETE FROM names');
});

afterAll(() => {
  server.close();
  db.disconnect();
});

const testName = 'Faz certo - que dá certo!';
let savedNameId;

describe('When to save a name', () => {
  test('should save the name encrypted in db', async () => {
    const { body, status } = await request(server)
      .post(MAIN_ROUTE)
      .send({
        name: testName,
      });

    expect(status).toBe(201);
    expect(body.encrypted_name).not.toBe(testName);
    savedNameId = body.id;
  });

  test('should save the name and return the properties id and encrypted_name', async () => {
    const { body, status } = await request(server)
      .post(MAIN_ROUTE)
      .send({
        name: testName,
      });

    expect(status).toBe(201);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('encrypted_name');
  });

  test('should return a E_VALIDATION_FAILURE error if name is not exist', async () => {
    const { body, status } = await request(server)
      .post(MAIN_ROUTE)
      .send({
        first_name: testName,
      });

    expect(status).toBe(400);
    expect(body.code).toBe('E_VALIDATION_FAILURE');
    expect(body.message).toBe('O campo "name" é obrigatório.');
  });
});

describe('When to find a name', () => {
  test('should return the name decrypted when find by id', async () => {
    const { body, status } = await request(server)
      .get(`${MAIN_ROUTE}/${savedNameId}`);

    expect(status).toBe(200);
    expect(body.name).toBe(testName);
  });

  test('should return a not found error if id not exist', async () => {
    const { body, status } = await request(server)
      .get(`${MAIN_ROUTE}/${1234578}`);

    expect(status).toBe(404);
    expect(body.code).toBe('E_NOT_FOUND');
    expect(body.message).toBe('Nome não encontrado.');
  });
});
