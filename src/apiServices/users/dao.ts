import { getRepository } from "typeorm";
import { User } from "../../entity/Important/User";
import { setUserPropertiesFromRequestBody } from "../../utils/userUtils";
module.exports = {
    async getUsers(req, res) {
        return new Promise(async (resolve, reject) => {
            const userRepository = getRepository(User);
            try {
                const users = await userRepository.find();
                if (users.length > 0) {
                  return resolve({ message: 'Usuarios encontrados', users: users, length: users.length  });
                } else {
                  throw new Error('Not Result.');
                }
              } catch (e) {
                return res.status(400).json({ message: e.message });
              } 
        })
    },
    async createUser(body, res) {
        return new Promise(async (resolve, reject) => {
            const user = new User();
            setUserPropertiesFromRequestBody(user, body);

            const userRepository = getRepository(User)

            try {
                const existUser = await userRepository.findOne({ where: { documentNumber: user.documentNumber } });
                if (existUser) {
                    return res.status(200).json({ error: 'El usuario ya existe' });
                }
            } catch (error) {
                return res.status(400).json({ error: 'Error en la consulta de usuario' });
            }

            await userRepository.save(user);

            return resolve({ message: 'Usuario creado correctamente'})
        })
    },
    async getUserById(req, res) {
        return new Promise(async (resolve, reject) => {
            const { documentNumber } = req.params;
            const userRepository = getRepository(User);
            try {
                const user = await userRepository.findOneOrFail({ where: { documentNumber: documentNumber } });
                res.send(user);
            } catch (e) {
                res.status(400).json({ message: 'Without result' });
            }
        })
    },
}