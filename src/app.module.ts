// Importa o decorator Module, que diz ao NestJS
// que essa classe é um módulo da aplicação
import { Module } from '@nestjs/common';

// Importa o TypeOrmModule, responsável por fazer
// a conexão com o banco de dados
import { TypeOrmModule } from '@nestjs/typeorm';

// Decorator que define este arquivo como um módulo principal
@Module({
  // módulos que a api vai usar
  imports: [

    // Configuração da conexão com o banco de dados
    TypeOrmModule.forRoot({

      // Tipo do banco de dados (MySQL)
      type: 'mysql',

      // Endereço do banco (localhost = banco rodando na máquina)
      host: 'localhost',

      // Porta padrão do MySQL
      port: 3306,

      // Usuário do banco
      username: 'root',

      // Senha do banco
      password: 'root',

      // Nome do banco de dados
      database: 'db_farmacia',

      // Faz o NestJS carregar automaticamente
      // todas as entidades (classes @Entity)
      autoLoadEntities: true,

      // Cria e atualiza as tabelas automaticamente
      // com base nas entidades
      synchronize: true,
    }),
  ],
})

// Classe principal da aplicação
// O NestJS começa por aqui
export class AppModule {}
