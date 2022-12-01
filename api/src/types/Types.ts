export interface User {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  weight: number;
  age: number;
  username: string;
  role: "customer" | "admin";
  noteId?: number;
  activityId?: number;
}

export interface Note {
  id?: number;
  date: string;
  content: string;
  tags: [string];
  dateCreated: Date;
  userId: number;
  activityId: number;
}

export interface Activity {
  id: number;
  createTime: Date;
  endTime: string;
  type: string;
  intensity: string;
  noteId: number;
  userId: number;
}
