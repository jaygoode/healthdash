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

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  time: string;

  @Column()
  content: string;

  @Column()
  tags: string;

  @ManyToOne(() => User, (user) => user.id)
  userId: User;
}
