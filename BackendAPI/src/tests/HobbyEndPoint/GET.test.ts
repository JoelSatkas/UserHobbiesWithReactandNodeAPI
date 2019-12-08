const request = require('supertest');
import app from '../../server';

describe('GET Endpoints', () => {
    it('should get', async () => {
        const res = await request(app)
            .get('/hobby');
        expect(res.statusCode).toEqual(404);
    })
});

afterEach(async () => {
    await app.close();
});
