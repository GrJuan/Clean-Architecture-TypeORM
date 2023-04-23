import * as express from 'express';
const controller = require('./controller');

const router = express.Router();

export const getCita = router.get('/', controller.getCita);

module.exports = {
    getCita
}