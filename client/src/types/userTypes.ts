export interface User {
  id?: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  age: number;
  weight: number;
  role: "customer" | "admin";
}

export interface Credentials {
  username: string;
  password: string;
}

export interface UserReducerState {
  userList: User[];
  currentUser: User | undefined;
}
