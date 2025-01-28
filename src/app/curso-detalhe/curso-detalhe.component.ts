import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  imports: [],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss'
})
export class CursoDetalheComponent implements OnInit {
  id: string = ""
  inscricao: Subscription = new Subscription()

  route: ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(){
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id']
    })
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }
}
