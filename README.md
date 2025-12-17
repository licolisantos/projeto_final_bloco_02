# 🏥 Projeto Farmácia — Backend NestJS


---
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen?style=for-the-badge)
![Projeto](https://img.shields.io/badge/projeto-backend--api-important?style=for-the-badge)
![Bootcamp](https://img.shields.io/badge/bootcamp-Generation%20Brasil-blueviolet?style=for-the-badge)

-----
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FE0902?style=for-the-badge&logo=typeorm&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-4000BF?style=for-the-badge&logo=insomnia&logoColor=white)



----
---- 

## 📌 Sobre o Projeto

Backend desenvolvido em **NestJS** para simular o sistema de uma **farmácia**, com foco em boas práticas de desenvolvimento, arquitetura modular e versionamento profissional com Git.

O projeto contempla **CRUD completo**, **relacionamento entre entidades** e uma **feature extra**, conforme os requisitos do **Bloco 02 do Bootcamp Full Stack da Generation Brasil**.

---

## 🎯 Objetivo

Construir uma **API REST** capaz de gerenciar **Categorias** e **Produtos** de uma farmácia, aplicando conceitos fundamentais de backend, como:

- Arquitetura modular com NestJS
- Persistência de dados com TypeORM
- Relacionamento entre entidades
- Boas práticas de organização de código
- Versionamento com Git e GitHub

---

## 🧱 Tecnologias Utilizadas

- Node.js
- NestJS
- TypeScript
- TypeORM
- MySQL
- Git & GitHub
- Insomnia (testes de endpoints)

---

## 🗂️ Estrutura do Projeto

```bash
projeto_final_bloco_02/
├── src/
├── test/
├── node_modules/
├── package.json
├── package-lock.json
├── nest-cli.json
├── tsconfig.json
├── tsconfig.build.json
└── README.md
```


---

## 🔗 Relacionamento entre Entidades

- **Categoria**
  - Possui vários produtos  
  - Relacionamento `@OneToMany`

- **Produto**
  - Pertence a uma categoria  
  - Relacionamento `@ManyToOne`

Esse relacionamento garante a integridade dos dados e reflete um cenário real de negócio.

---

## 🔄 Funcionalidades Implementadas

### 📂 Categoria
- Criar categoria  
- Listar todas as categorias  
- Buscar categoria por ID  
- Atualizar categoria  
- Deletar categoria  

### 🧪 Produto
- Criar produto vinculado a uma categoria  
- Listar todos os produtos (com categoria)  
- Buscar produto por ID  
- Atualizar produto  
- Deletar produto  

### ⭐ Feature Extra
- Buscar produtos por nome (busca parcial utilizando `LIKE`)

---

## 🧪 Testes dos Endpoints

Os endpoints foram testados utilizando o **Insomnia**, validando:

- Criação de registros  
- Retorno correto das entidades  
- Relacionamento entre Categoria e Produto  
- Respostas HTTP adequadas  

---

## ▶️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

`git clone`
https://github.com/licolisantos/projeto_final_bloco_02.git


### 2️⃣ Acessar a pasta do projeto

`cd projeto_final_bloco_02`

### 3️⃣ Instalar as dependências

`npm install`

### 4️⃣ Configurar o banco de dados

No arquivo app.module.ts, configure as credenciais do MySQL:

```ts
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: 'root',
database: 'db_farmacia',
```



⚠️ Certifique-se de que o banco db_farmacia já exista no MySQL.


### 5️⃣ Executar a aplicação

```npm run start:dev```


A API estará disponível em:

```http://localhost:3000```



📌 Observações Finais
Projeto desenvolvido como atividade avaliativa do Bootcamp Full Stack da Generation Brasil — Bloco 02, com foco em aprendizado prático, consolidação dos fundamentos de backend e organização profissional do código.


## 🧑‍💻 Autora

**Licoli Santos**  
Dev em formação | Backend | Full Stack  

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Licoli%20Santos-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/licoli-santos/)
[![GitHub](https://img.shields.io/badge/GitHub-licolisantos-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/licolisantos)
