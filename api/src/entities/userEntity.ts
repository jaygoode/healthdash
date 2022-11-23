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
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ width: 40 })
  username: string;

  @Column({ width: 40 })
  password: string;

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

  @Column()
  role: "customer" | "admin";

  @ManyToOne(() => Note, (note) => note.userId, { cascade: true })
  noteId: Note;
}
