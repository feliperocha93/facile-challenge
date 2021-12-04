const request = require('supertest');

const server = require('../../src/index');

const MAIN_ROUTE = '/encrypt';

afterAll(() => {
  server.close();
});

describe('When to save a string', () => {
  test.todo('should save the string');
  test.todo('should save the string encrypted in db');
  test.todo('should return the successReturnPatter if everything ok');
  test.todo('should return a E_VALIDATION_FAILURE error if name is not exist');
});

describe('When to find a string', () => {
  test.todo('should return the string decrypted when find by id');
  test.todo('should return a not found error if id not exist');
});
