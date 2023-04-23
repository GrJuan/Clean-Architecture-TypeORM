const citaModel = require('./model');

module.exports = {

    async getCita(req, res) {
        const cita = await citaModel.getCita(req, res);
        res.status(200).json(cita);
    }
}