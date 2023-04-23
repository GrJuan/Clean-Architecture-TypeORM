import * as express from 'express';
const controller = require('./controller');

const router = express.Router();

export const getUsers = router.get('/', controller.getUsers);

export const createUser = router.post('/', controller.createUser);

export const getUserById = router.get('/:documentNumber', controller.getUserById);

module.exports = {
    getUsers,
    createUser,
    getUserById
}