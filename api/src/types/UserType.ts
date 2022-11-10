export interface User {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  weight: number;
  age: number;
}

export interface Note {
  id?: number;
  date: string;
  content: string;
  tags: string;
  userId: number;
}
