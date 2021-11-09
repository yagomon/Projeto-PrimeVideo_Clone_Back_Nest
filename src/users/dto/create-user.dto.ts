import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 100)
  name: string;

  @IsEmail({}, { message: 'Informe um endereço de email válido!' })
  email: string;

  @IsString()
  @Length(6, 15)
  password: string;

  @IsString()
  @Length(6, 15)
  passwordConfirmation: string;
}
