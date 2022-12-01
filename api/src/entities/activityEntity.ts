import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  OneToOne,
  OneToMany,
  CreateDateColumn,
} from "typeorm";

import { User } from "./userEntity";
import { Note } from "./noteEntity";

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: "create_time" })
  createTime: Date;

  @Column({ type: "time", nullable: true })
  endTime: string;

  @Column()
  type: string;

  @Column()
  intensity: string;

  @ManyToOne(() => Note, (note) => note.activityId, { cascade: true })
  noteId: Note;

  @ManyToOne(() => User, (user) => user.id)
  userId: User;
}
