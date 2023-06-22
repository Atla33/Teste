import { Prato} from "@prisma/client";

export class PratoEntity implements Prato {

    pratoId: number;
    nome: string;
    tipo: string;
    caloria: number;
    vegetariano: boolean;

}
