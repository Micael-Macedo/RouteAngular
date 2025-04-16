import { Component, inject } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from '../models/curso.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  cursos: Curso[] = []
  pagina!: number

  inscricao = new Subscription()

  route = inject(ActivatedRoute)
  router = inject(Router)
  cursoService = inject(CursosService)

  ngOnInit(){
    this.cursos = this.cursoService.getCursos()
    this.inscricao = this.route.queryParams.subscribe(params => {
      this.pagina = params['pagina']
    })
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

  proximaPagina(){
    this.pagina++
    this.router.navigate(['/cursos'], {queryParams: {'pagina': this.pagina}})
  }
}
