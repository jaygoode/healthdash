import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  OneToOne,
  OneToMany,
} from "typeorm";

import { User } from "./userEntity";
import { Note } from "./noteEntity";

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "time" })
  startTime: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  endTime: string;

  @Column({ type: "time" })
  duration: string;

  @Column()
  type: string;

  @Column()
  intensity: string;

  @OneToMany(() => Note, (note) => note.id)
  noteId: Note;

  @ManyToOne(() => User, (user) => user.id)
  userId: User;
}
