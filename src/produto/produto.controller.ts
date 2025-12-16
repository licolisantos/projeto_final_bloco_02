import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './entities/produto.entity';

@Controller('/produtos')
export class ProdutoController {

  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  // feature: buscar produtos por nome
  @Get('/nome/:nome')
  findByNome(@Param('nome') nome: string) {
    return this.produtoService.findByNome(nome);
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.produtoService.findById(Number(id));
  }

  @Post()
  create(@Body() produto: Produto) {
    return this.produtoService.create(produto);
  }

  @Put()
  update(@Body() produto: Produto) {
    return this.produtoService.update(produto);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.produtoService.delete(Number(id));
  }
}