import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Curso } from '../../models/curso.model';
import { CursosService } from '../cursos.service';

@Component({
  standalone: false,
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss'
})
export class CursoDetalheComponent implements OnInit {
  id!: number
  inscricao: Subscription = new Subscription()
  curso!: Curso | null
  route: ActivatedRoute = inject(ActivatedRoute)
  cursoService = inject(CursosService)
  router = inject(Router)

  ngOnInit(){
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = parseInt(params['id'])
      this.curso = this.cursoService.getCurso(this.id)
      if(this.curso == null){
        this.router.navigate(['naoEncontrado', this.id])
      }
    })
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }
}
