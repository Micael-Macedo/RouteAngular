import { Component, inject } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from '../models/curso.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cursos',
  imports: [RouterLink],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  cursos: Curso[] = []
  cursoService = inject(CursosService)

  ngOnInit(){
    this.cursos = this.cursoService.getCursos()
  }
}
