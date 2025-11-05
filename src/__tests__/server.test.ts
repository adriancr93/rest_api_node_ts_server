import request from 'supertest'
import server, { connectDB } from '../server'
import db from '../config/db'

describe('GET /api', () => {
    it('should send back a JSON response', async() => {
       const res = await request(server).get('/api')

       expect(res.status).toBe(200)
       expect(res.header['content-type']).toMatch(/json/)
       expect(res.body.msg).toBe('API working')

       expect(res.status).not.toBe(404)
       expect(res.body.msg).not.toBe('api works')
    })
})

jest.mock('../config/db')

describe('connectDB', () => {
    it('should handle datbase connection error', async () => {
        jest.spyOn(db, 'authenticate').mockRejectedValueOnce(new Error('Error connecting to database'))

        const consoleSpy = jest.spyOn(console, 'log')

        await connectDB()

        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Error connecting to database'))
    })
})
