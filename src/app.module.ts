import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioruModule } from './usuarioru/usuarioru.module';
import { AvisosModule } from './avisos/avisos.module';
import { SugestoesModule } from './sugestoes/sugestoes.module';
import { PratosModule } from './pratos/pratos.module';
//decorator - Javascript - Ecmascript 7

@Module({
  imports: [AuthModule, PrismaModule, UsuarioruModule, AvisosModule, SugestoesModule, PratosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
