import { Router } from 'express';
import { createUser, getUserById, getUsers } from './apiServices/users/routes';
import { createDoctor, getDoctors } from './apiServices/doctor/routes';
import { getSpeciality } from './apiServices/speciality/routes';
import { getCita } from './apiServices/cita/routes';

const router = Router();

/*  router user */
router.use('/users', getUsers);
router.use('/createUser', createUser);
router.use('/searchUser', getUserById);

/* router doctor */
router.use('/doctors', getDoctors);
router.use('/createDoctor', createDoctor);


/* router Speciality */
router.use('/speciality', getSpeciality);

/* router Cita */
router.use('/citas', getCita);
module.exports = router;