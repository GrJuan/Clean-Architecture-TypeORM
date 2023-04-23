const specialityModel = require('./model');

module.exports = {

    async getSpeciality(req, res) {
        const speciality = await specialityModel.getSpeciality(req, res);
        res.status(200).json(speciality);
    }
}