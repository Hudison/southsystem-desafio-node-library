import { IsEmail, IsPhoneNumber, IsPositive, IsNotEmpty, IsString } from 'class-validator';
import { Book } from '../interfaces/books.interface';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public name: string;
  
  @IsPositive()
  public age: number;

  @IsPhoneNumber()
  public phone: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  public favoriteBooks: Book[];
}
