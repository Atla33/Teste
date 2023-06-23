import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCardapioSemanalDto } from './dto/create-cardapiosemanal.dto';
import { UpdateCardapiosemanalDto } from './dto/update-cardapiosemanal.dto';

@Injectable()
export class CardapiosemanalService {
  constructor(private prisma: PrismaService) {}

  async create(createCardapiosemanalDto: CreateCardapioSemanalDto) {
    const { pratos, dia_da_semana } = createCardapiosemanalDto;
    return this.prisma.cardapio_Semanal.create({
      data: {
        dia_da_semana,
        pratos: {
          create: pratos.map(pratoId => ({ pratoId })),
        },
      },
      include: { pratos: { include: { prato: true } } },
    });
  }

  async findAll() {
    return this.prisma.cardapio_Semanal.findMany({
      include: { pratos: { include: { prato: true } } },
    });
  }

  async findOne(cardapioId: number) {
    return this.prisma.cardapio_Semanal.findUnique({
      where: { cardapioId },
      include: { pratos: { include: { prato: true } } },
    });
  }

  async update(
    cardapioId: number,
    updateCardapiosemanalDto: UpdateCardapiosemanalDto,
  ) {
    const { pratos, dia_da_semana } = updateCardapiosemanalDto;
    return this.prisma.cardapio_Semanal.update({
      where: { cardapioId },
      data: {
        ...(dia_da_semana && { dia_da_semana }),
        ...(pratos && {
          pratos: {
            deleteMany: {},
            create: pratos.map(pratoId => ({ pratoId })),
          },
        }),
      },
      include: { pratos: { include: { prato: true } } },
    });
  }

  async remove(cardapioId: number) {
    return this.prisma.cardapio_Semanal.delete({
      where: { cardapioId },
    });
  }
}

