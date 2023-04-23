import * as express from 'express';
const controller = require('./controller');

const router = express.Router();

export const getSpeciality = router.get('/', controller.getSpeciality);

module.exports = {
    getSpeciality
}