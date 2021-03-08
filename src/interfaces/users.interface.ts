import { Book } from './books.interface';

export interface User {
  _id: string;
  email: string;
  name: string;
  age: number;
  phone: string;
  password: string;
  favoriteBooks: Book[];
}
