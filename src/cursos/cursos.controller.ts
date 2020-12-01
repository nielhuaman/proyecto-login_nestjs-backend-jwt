import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UnauthorizedException, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursoDto } from './dto/create-curso.dto';
import { RolDecorator } from 'src/decorators/rol.decorator';
import { JwtAuthGuard } from './../guards/jwt.guard';
import { RolNombre } from './../rol/rol.enum';
import { RolesGuard } from './../guards/rol.guard';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}
  
 

  @RolDecorator(RolNombre.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
   @Post()
  async create(@Body() dto: CursoDto) {
      return await this.cursosService.create(dto);
  }

  @RolDecorator(RolNombre.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  findAll() {
    return this.cursosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursosService.findOne(+id);
  }


  @RolDecorator(RolNombre.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() CursoDto: CursoDto) {
    return await this.cursosService.update(id, CursoDto);
  }
  
 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursosService.remove(+id);
  }
}
