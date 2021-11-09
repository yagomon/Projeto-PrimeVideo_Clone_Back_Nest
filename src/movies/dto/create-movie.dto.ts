import { IsString, IsUrl } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  name: string;

  @IsString()
  year: string;

  @IsString()
  length: string;

  @IsString()
  storyline: string;

  @IsUrl()
  image: string;
}
