import { Injectable } from '@nestjs/common';
import { MessageDto } from './../common/message.dto';
import { CursoDto } from './dto/create-curso.dto';
import { CursoEntity } from './entities/curso.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoRepository } from './cursos.repository';
import { BadRequestException, NotFoundException } from '@nestjs/common';


@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(CursoEntity)
    private readonly CursoRepository: CursoRepository
) {}

  create(createCursoDto: CursoDto) {
    return 'This action adds a new curso';
  }

  async findAll(): Promise<CursoEntity[]> {
    const cursos = await this.CursoRepository.find();
    if(!cursos.length) throw new NotFoundException(new MessageDto('no hay cursos en la lista'));
    return cursos;
  }

  


  findOne(id: number) {
    return `This action returns a #${id} curso`;
  }

  update(id: number, createCursoDto: CursoDto) {
    return `This action updates a #${id} curso`;
  }

  remove(id: number) {
    return `This action removes a #${id} curso`;
  }
}
