/* eslint-disable prettier/prettier */
import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Alkalmazott {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kezdoDatum: Date;

  @Exclude()
  @Column('int')
  haviBer: number;

  @Column()
  hivatalosEmail: string;  
}
