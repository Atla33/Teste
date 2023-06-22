import { Sugestao } from "@prisma/client";
import { IsDate, IsDateString, IsString } from "class-validator";

export class CreateSugestoeDto implements Sugestao{

    sugestoesId: number;
    @IsString()
    nome_aluno: string;
    @IsString()
    email_aluno: string;
    @IsString()
    comentario_aluno: string;
    @IsDateString()
    data: Date;


}
