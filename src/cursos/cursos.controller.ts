import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursoDto } from './dto/create-curso.dto';


@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}
  
  @Post()
  create(@Body() dto: CursoDto) {
   
  }

  @Get()
  findAll() {
    return this.cursosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() CursoDto: CursoDto) {
    return this.cursosService.update(+id, CursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursosService.remove(+id);
  }
}
