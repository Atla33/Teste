import { Prisma } from '@prisma/client';

export type CardapioSemanal = Prisma.Cardapio_SemanalGetPayload<{
  include: { pratos: { include: { prato: true } } };
}>;