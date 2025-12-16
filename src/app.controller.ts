import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// Importa o decorator Controller e o método Get do NestJS
// Importa o serviço AppService

// Define a classe AppController como um controlador
// Define uma rota GET na raiz ('/')
// Injeta o serviço AppService no controlador
// Define o método getHello que retorna uma string
