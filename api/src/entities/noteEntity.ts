import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { Activity } from "./activityEntity";

import { User } from "./userEntity";

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: "create_time" })
  createTime: Date;

  @Column()
  content: string;

  @Column({ array: true, nullable: true })
  tags: string;

  @ManyToOne(() => User, (user) => user.id)
  userId: User;

  @ManyToOne(() => Activity, (activity) => activity.noteId)
  activityId: Activity;
}
