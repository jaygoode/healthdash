import { notEqual } from "assert";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { Note } from "./noteEntity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ width: 40 })
  firstname: string;

  @Column({ width: 40 })
  lastname: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column()
  weight: number;

  @ManyToOne(() => Note, (note) => note.userId, { cascade: true })
  noteId: Note;
}
