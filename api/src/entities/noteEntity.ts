import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
} from "typeorm";

import { User } from "./userEntity";

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ width: 40 })
  date: string;

  @Column()
  content: string;

  @Column()
  tags: string;

  @ManyToOne(() => User, (user) => user.id)
  userId: User;
}
