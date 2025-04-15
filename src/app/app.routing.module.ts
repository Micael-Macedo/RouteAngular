import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

export const AppRoutes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {
    path: 'cursos',
    loadChildren: () =>
      import('./cursos/cursos.module').then((m) => m.CursosModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forChild(AppRoutes)], // Configura as rotas para o módulo
  exports: [RouterModule], // Exporta o RouterModule para ser usado no módulo de cursos
})

export class AppRoutingModule {}
