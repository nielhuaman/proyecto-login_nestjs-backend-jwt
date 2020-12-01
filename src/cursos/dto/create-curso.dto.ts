
import { IsNotEmpty, IsNumber, Min } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class CursoDto {

    @IsNotBlank({message: 'el curso no puede estar vacío'})
    curso?: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(1, {message: 'creditos debe ser mayor que 0'})
    creditos?: number;
}