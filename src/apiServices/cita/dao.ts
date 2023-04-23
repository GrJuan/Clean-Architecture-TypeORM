import { getRepository } from "typeorm";
import { Cita } from "../../entity/Moderate/Cita";

module.exports = {
    async getCita(req, res) {
        return new Promise(async (resolve, reject) => {
            const citaRepository = getRepository(Cita);
            try {
                const cita = await citaRepository.find({relations: ['doctor', 'doctor.speciality', 'doctor.consultingRoom', 'user']});
                if (cita.length > 0) {
                  return resolve({ message: 'Citas encontradas', citas: cita, length: cita.length });
                } else {
                  throw new Error('Not Result.');
                }
              } catch (e) {
                return res.status(400).json({ message: e.message });
              } 
        })
    }
}