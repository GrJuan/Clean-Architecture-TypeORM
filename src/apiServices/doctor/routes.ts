import * as express from 'express';
const controller = require('./controller');

const router = express.Router();

export const getDoctors = router.get('/', controller.getDoctors);
export const createDoctor = router.post('/', controller.createDoctor);

module.exports = {
    getDoctors,
    createDoctor
}