import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsNotEmpty()
  public isbn: string;

  @IsString()
  @IsNotEmpty()
  public category: string;

  @Length(4,4)
  public year: string;
}
