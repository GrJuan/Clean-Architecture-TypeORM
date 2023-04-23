import { getRepository } from "typeorm";
import { Doctor } from "../../entity/Important/Doctor";
import { setDoctorPropertiesFromRequestBody } from "../../utils/doctorUtils";

module.exports = {
    async getDoctors(req, res) {
        return new Promise(async (resolve, reject) => {
            const doctorRepository = getRepository(Doctor);
            try {
                const doctors = await doctorRepository.find({relations: ['consultingRoom', 'speciality']});
                if (doctors.length > 0) {
                  return resolve({ message: 'Doctores encontrados', doctors: doctors, length: doctors.length });
                } else {
                  throw new Error('Not Result.');
                }
              } catch (e) {
                return res.status(400).json({ message: e.message });
              } 
        })
    },
    async createDoctor(body, res) {
        return new Promise(async (resolve, reject) => {
            const doctor = new Doctor();
            setDoctorPropertiesFromRequestBody(doctor, body);

            const doctorRepository = getRepository(Doctor)

            try {
                const existUser = await doctorRepository.findOne({ where: { email: doctor.email } });
                if (existUser) {
                    return res.status(200).json({ error: 'El doctor ya existe' });
                }
            } catch (error) {
                return res.status(400).json({ error: 'Error en la consulta de doctor' });
            }

            await doctorRepository.save(doctor);

            return resolve({ message: 'doctor creado correctamente'})
        })
    }
}