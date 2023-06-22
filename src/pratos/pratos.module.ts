import { Module } from '@nestjs/common';
import { PratosService } from './pratos.service';
import { PratosController } from './pratos.controller';

@Module({
  controllers: [PratosController],
  providers: [PratosService]
})
export class PratosModule {}
