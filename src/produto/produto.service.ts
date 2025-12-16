import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { Categoria } from '../categoria/entities/categoria.entity';

@Injectable()
export class ProdutoService {

  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,

    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  findAll(): Promise<Produto[]> {
    return this.produtoRepository.find({ relations: ['categoria'] });
  }

  findById(id: number): Promise<Produto | null> {
    return this.produtoRepository.findOne({
      where: { id },
      relations: ['categoria'],
    });
  }

  async create(produto: Produto): Promise<Produto> {
    const categoria = await this.categoriaRepository.findOneBy({
      id: produto.categoria.id,
    });

    produto.categoria = categoria!;
    return this.produtoRepository.save(produto);
  }

  update(produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(produto);
  }

  async delete(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }
}