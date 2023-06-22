import { Injectable } from '@nestjs/common';
import { CreatePratoDto } from './dto/create-prato.dto';
import { UpdatePratoDto } from './dto/update-prato.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PratosService {
  create(createPratoDto: CreatePratoDto) {
    return 'This action adds a new prato';
  }

  findAll() {
    return `This action returns all pratos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prato`;
  }

  update(id: number, updatePratoDto: UpdatePratoDto) {
    return `This action updates a #${id} prato`;
  }

  remove(id: number) {
    return `This action removes a #${id} prato`;
  }
}
