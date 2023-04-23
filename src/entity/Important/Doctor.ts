import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ConsultingRoom } from "../Moderate/ConsultingRoom";
import { Speciality } from "../Moderate/Speciality";

@Entity()
export class Doctor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @OneToMany(() => ConsultingRoom, consultingRoom => consultingRoom.doctor)
    consultingRoom: ConsultingRoom[];

    @OneToMany(() => Speciality, speciality => speciality.doctor)
    speciality: Speciality[];
}
