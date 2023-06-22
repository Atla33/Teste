import { Prato} from "@prisma/client";
import { IsString } from "class-validator";


export class CreatePratoDto implements Prato {

    pratoId: number;

    @IsString()
    nome: string;

    @IsString()
    tipo: string;

    caloria: number;

    @IsString()
    vegetariano: boolean;

}
