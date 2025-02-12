const request = require('supertest');
const app = require('../../server');

describe('Flight API Tests', () => {
  let server;

  beforeAll(async () => {
    server = app.listen(5001);
  });

  afterAll(async () => {
    server.close();
  });

  test('Search Flights', async () => {
    const res = await request(server)
      .get('/api/flights/search')
      .query({ origin: "JFK", destination: "LAX", departureDate: "2025-06-10" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
