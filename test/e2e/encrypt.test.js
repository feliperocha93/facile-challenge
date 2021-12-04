const request = require('supertest');

const server = require('../../src/index');

const MAIN_ROUTE = '/encrypt';

afterAll(() => {
  server.close();
});

describe('When to save a name', () => {
  test('should save the name and return the properties id and encrypted_name', async () => {
    const { body, status } = await request(server)
      .post(MAIN_ROUTE)
      .send({
        name: 'Faz certo - que dá certo!',
      });

    expect(status).toBe(201);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('encrypted_name');
  });

  test.todo('should save the name encrypted in db');
  test.todo('should return a E_VALIDATION_FAILURE error if name is not exist');
});

describe('When to find a name', () => {
  test.todo('should return the name decrypted when find by id');
  test.todo('should return a not found error if id not exist');
});
