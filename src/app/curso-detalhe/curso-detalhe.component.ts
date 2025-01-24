import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  imports: [],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss'
})
export class CursoDetalheComponent {
  id: string = ""

  constructor(private route: ActivatedRoute){
    this.id = this.route.snapshot.params['id']
  }



}
