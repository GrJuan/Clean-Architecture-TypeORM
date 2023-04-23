import { Doctor } from "../entity/Important/Doctor";

export function setDoctorPropertiesFromRequestBody(doctor: Doctor, body: any): void {
    doctor.firstName = body.firstName;
    doctor.lastName = body.lastName;
    doctor.email = body.email;
  }