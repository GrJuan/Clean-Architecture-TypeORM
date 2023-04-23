import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Doctor } from "../Important/Doctor";
import { User } from "../Important/User";

@Entity()
export class Cita {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    date: Date;

    @ManyToOne(() => Doctor, doctor => doctor.speciality)
    doctor: Doctor;

    @ManyToOne(() => User, user => user.cita)
    user: User;
}
