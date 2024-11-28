const request = require('supertest');
const app = require('../app');  // Import the app instance

describe('GET /', () => {
  it('should return a 200 status code', async () => {
    const response = await request(app).get('/');  // Perform a GET request to the root
    expect(response.status).toBe(200);  // Assert that the status code is 200
  });
});
