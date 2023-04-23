const citaDao = require('./dao')

module.exports = {
    async getCita(req, res) {
        return citaDao.getCita(req, res)
    }
}