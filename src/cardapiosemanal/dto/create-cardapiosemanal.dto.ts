import { Cardapio_Semanal } from '@prisma/client';
import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateCardapioSemanalDto implements Cardapio_Semanal {
  @IsArray()
  @IsInt({ each: true })
  pratos: number[];

  @IsString()
  dia_da_semana: string;
  
  cardapioId: number
  data: Date
  
}
