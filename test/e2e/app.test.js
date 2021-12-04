/* eslint-disable no-undef */
const request = require('supertest');

const server = require('../../src/index');

const MAIN_ROUTE = '/';

afterAll(() => {
  server.close();
});

describe('API TEST', () => {
  test('should is running', async () => {
    const { status, text } = await request(server).get(`${MAIN_ROUTE}`);

    expect(status).toBe(200);
    expect(text).toContain('The server is runninga');
  });
});
