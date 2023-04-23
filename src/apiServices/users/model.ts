const userDao = require('./dao')

module.exports = {

    async getUsers(page, limit) {
        return userDao.getUsers(page, limit)
    },
    async createUser(body, res) {
        return userDao.createUser(body, res)
    },
    async getUserById(req, res) {
        return userDao.getUserById(req, res)
    }
}