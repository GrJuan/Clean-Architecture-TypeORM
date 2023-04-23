import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Doctor } from "../Important/Doctor";

@Entity()
export class Speciality {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Doctor, doctor => doctor.speciality)
    doctor: Doctor;
}
