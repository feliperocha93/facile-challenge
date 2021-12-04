const request = require('supertest');
const db = require('../../src/database');

const server = require('../../src/index');

const MAIN_ROUTE = '/encrypt';

beforeAll(() => {
  db.query('DELETE FROM names');
});

afterAll(() => {
  server.close();
});

const testName = 'Faz certo - que dá certo!';
let savedNameId;

describe('When to save a name', () => {
  test('should save the name and return the properties id and encrypted_name', async () => {
    const { body, status } = await request(server)
      .post(MAIN_ROUTE)
      .send({
        name: testName,
      });

    expect(status).toBe(201);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('encrypted_name');
    savedNameId = body.id;
  });

  test.todo('should save the name encrypted in db');
  test.todo('should return a E_VALIDATION_FAILURE error if name is not exist');
});

describe('When to find a name', () => {
  test('should return the name decrypted when find by id', async () => {
    const { body, status } = await request(server)
      .get(`${MAIN_ROUTE}/${savedNameId}`);

    expect(status).toBe(200);
    expect(body.name).toBe(testName);
  });

  test.todo('should return a not found error if id not exist');
});
