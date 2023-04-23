const doctorModel = require('./model');
const doctorDto = require('./dao');

module.exports = {

    async getDoctors(req, res) {
        const doctors = await doctorModel.getDoctors(req, res);
        res.status(200).json(doctors);
    },
    async createDoctor(req, res) {
        try {
            const doctor = await doctorModel.createDoctor(req.body, res);
            res.status(200).json(doctor);
        } catch (error) {
            res.status(500).json({ error: 'Error en la creación de doctor' });
        }
    }
}