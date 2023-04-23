import { getRepository } from "typeorm";
import { Speciality } from "../../entity/Moderate/Speciality";

module.exports = {
    async getSpeciality(req, res) {
        return new Promise(async (resolve, reject) => {
            const specialityRepository = getRepository(Speciality);
            try {
                const speciality = await specialityRepository.find({relations: ['doctor']});
                if (speciality.length > 0) {
                  return resolve({ message: 'Especialidades encontradas', speciality: speciality, length: speciality.length });
                } else {
                  throw new Error('Not Result.');
                }
              } catch (e) {
                return res.status(400).json({ message: e.message });
              } 
        })
    }
}