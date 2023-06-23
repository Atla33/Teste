import { Prisma } from '@prisma/client';

export class Prato implements Prisma.PratoUncheckedCreateInput {
  pratoId: number;
  nome: string;
  tipo: string;
  caloria: number;
  vegetariano: boolean;
}
