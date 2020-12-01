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

async findByCurso(curso: string): Promise<CursoEntity> {
  const producto = await this.CursoRepository.findOne({ curso: curso });
  return producto;
}

async create(createCursoDto: CursoDto): Promise<any> {
    const exists = await this.findByCurso(createCursoDto.curso);
    if (exists) throw new BadRequestException(new MessageDto('ese curso ya existe'));
    const curso = this.CursoRepository.create(createCursoDto);
    await this.CursoRepository.save(curso);
    return new MessageDto(`curso ${curso.curso} creado`);

  }


  async findAll(): Promise<CursoEntity[]> {
    const cursos = await this.CursoRepository.find();
    if(!cursos.length) throw new NotFoundException(new MessageDto('no hay cursos en la lista'));
    return cursos;
  }

  
  async findOne(id: number): Promise<CursoEntity> {
    const curso = await this.CursoRepository.findOne(id);
    if (!curso) {
        throw new NotFoundException(new MessageDto('no existe'));
    }
    return curso;
  }

  async update(id: number, createCursoDto: CursoDto): Promise<any> {
    const curso = await this.findOne(id);
        if (!curso)
            throw new NotFoundException(new MessageDto('no existe el curso'));
        const exists = await this.findByCurso(createCursoDto.curso);
        if (exists && exists.id !== id) throw new BadRequestException(new MessageDto('ese producto ya existe'));
        createCursoDto.curso ? curso.curso = createCursoDto.curso : curso.nombre = curso.nombre;
        createCursoDto.creditos ? curso.creditos = createCursoDto.creditos : curso.creditos = curso.creditos;
        await this.CursoRepository.save(curso);
        return new MessageDto(`curso ${curso.curso} actualizado`);
  }

  remove(id: number) {
    return `This action removes a #${id} curso`;
  }
}
