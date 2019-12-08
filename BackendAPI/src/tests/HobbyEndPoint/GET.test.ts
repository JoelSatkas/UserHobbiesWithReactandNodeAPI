const request = require('supertest');
import app from '../../server';

describe('GET Endpoints', () => {
    it('should get', async () => {
        const res = await request(app)
            .get('/user');
        expect(res.statusCode).toEqual(200);
    })
});
