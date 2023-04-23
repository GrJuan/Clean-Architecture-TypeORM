const specialityDao = require('./dao')

module.exports = {
    async getSpeciality(req, res) {
        return specialityDao.getSpeciality(req, res)
    }
}