import { PartialType } from '@nestjs/mapped-types';
import { CreateCardapioSemanalDto } from './create-cardapiosemanal.dto';
import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateCardapiosemanalDto extends PartialType(CreateCardapioSemanalDto) {
    @IsArray()
    @IsInt({ each: true })
    @IsOptional()
    pratos?: number[];
  
    @IsString()
    @IsOptional()
    dia_da_semana?: string;
  }
