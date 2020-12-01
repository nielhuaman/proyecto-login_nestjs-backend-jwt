import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'curso'})

export class CursoEntity {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 10, nullable: false})
    codigo: string;

    @Column({type: 'integer', nullable: false})
    codigo_profesor: number;

    @Column({type: 'varchar', length: 10, nullable: false})
    nombre: string;
    
    @Column({type: 'varchar', length: 10, nullable: false, unique: true})
    curso: string;

    @Column({type: 'integer', nullable: false})
    numero_ciclo: number;

    @Column({type: 'integer', nullable: false})
    creditos: number;
}
