import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column()
  weight: number;
}
