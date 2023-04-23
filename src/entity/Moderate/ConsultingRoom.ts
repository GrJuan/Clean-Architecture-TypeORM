import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Doctor } from "../Important/Doctor";

@Entity()
export class ConsultingRoom {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Doctor, doctor => doctor.consultingRoom)
    doctor: Doctor;
}
