const userModel = require('./model');
const userDto = require('./dao');

module.exports = {

    async getUsers(req, res) {
        const users = await userModel.getUsers(req, res);
        res.status(200).json(users);
    },
    async createUser(req, res) {
        try {
            const users = await userModel.createUser(req.body, res);
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Error en la creación de usuarios' });
        }
    },
    async getUserById(req, res) {
        const user = await userModel.getUserById(req, res);
        res.status(200).json(user);
    }
}