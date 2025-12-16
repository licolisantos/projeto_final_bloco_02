import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './entities/categoria.entity';

@Controller('/categorias')
export class CategoriaController {

  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.categoriaService.findById(Number(id));
  }

  @Post()
  create(@Body() categoria: Categoria) {
    return this.categoriaService.create(categoria);
  }

  @Put()
  update(@Body() categoria: Categoria) {
    return this.categoriaService.update(categoria);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.categoriaService.delete(Number(id));
  }
}
