const doctorDao = require('./dao')

module.exports = {

    async getDoctors(req, res) {
        return doctorDao.getDoctors(req, res)
    },
    async createDoctor(body, res) {
        return doctorDao.createDoctor(body, res)
    }
}