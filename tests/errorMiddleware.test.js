const test = require('node:test')
const assert = require('node:assert/strict')
const errorHandler = require('../backend/middleware/errorMiddleware')

for (const statusCode of [401, 403, 404, 409]) {
    test(`conserva el estado HTTP ${statusCode}`, () => {
        const res = {
            statusCode,
            status(code) { this.statusCode = code; return this },
            json(body) { this.body = body }
        }
        errorHandler(new Error('Error de prueba'), {}, res, () => {})
        assert.equal(res.statusCode, statusCode)
        assert.equal(res.body.message, 'Error de prueba')
    })
}
test('un error sin estado de error responde 500', () => {
    const res = { statusCode: 200, status(code) { this.statusCode = code; return this }, json() {} }
    errorHandler(new Error('Error interno'), {}, res, () => {})
    assert.equal(res.statusCode, 500)
})
