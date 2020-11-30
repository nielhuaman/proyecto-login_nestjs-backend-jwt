import { CursoEntity } from './entities/curso.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(CursoEntity)
export class CursoRepository extends Repository<CursoEntity> {}