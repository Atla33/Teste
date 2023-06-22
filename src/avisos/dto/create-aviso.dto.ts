import { Aviso } from "@prisma/client";
import { IsDate, IsDateString, IsString } from "class-validator";

export class CreateAvisoDto implements Aviso {

    avisoId: number;
    @IsString()
    titulo: string;
    @IsDateString()
    data: Date;
    @IsString()

    autor: string;
    @IsString()

    texto: string;
}
