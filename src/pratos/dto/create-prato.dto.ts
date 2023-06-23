import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreatePratoDto {
  @IsString()
  nome: string;

  @IsString()
  tipo: string;

  
  caloria: number;

  
  vegetariano: boolean;
}
