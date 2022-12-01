import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { Activity } from "./activityEntity";

import { User } from "./userEntity";

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date", nullable: true })
  date: string;

  @Column({ type: "time", nullable: true })
  time: string;

  @Column()
  content: string;

  @Column({ array: true, nullable: true })
  tags: string;

  @ManyToOne(() => User, (user) => user.id)
  userId: User;

  @ManyToOne(() => Activity, (activity) => activity.noteId)
  activityId: Activity;
}
