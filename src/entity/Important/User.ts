import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn} from "typeorm";
import { Cita } from "../Moderate/Cita";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    documentNumber: string;

    @Column()
    phoneNumber: string;
    
    @OneToMany(() => Cita, cita => cita.user)
    cita: Cita[];
}
