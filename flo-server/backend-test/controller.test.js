const supertest = require('supertest');
const mongoose = require('mongoose');
const {app, server} = require('../index');

const api = supertest(app)

test('test db is connected', async () => {
    const response = await api.get('/journeys')
    expect(response.body).toHaveLength(0)
})



afterAll(() => {
    mongoose.connection.close()
    server.close()
})