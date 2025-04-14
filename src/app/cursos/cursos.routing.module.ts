import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

export const cursosRoutes: Routes = [
  { path: '', component: CursosComponent }, // Rota padrão para cursos
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'naoEncontrado/:id', component: CursoNaoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)], // Configura as rotas para o módulo
  exports: [RouterModule], // Exporta o RouterModule para ser usado no módulo de cursos
})

export class CursosRoutingModule {}


