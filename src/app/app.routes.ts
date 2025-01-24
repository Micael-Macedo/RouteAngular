import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "cursos", component: CursosComponent},
  {path: "curso/:id", component: CursoDetalheComponent}
];


