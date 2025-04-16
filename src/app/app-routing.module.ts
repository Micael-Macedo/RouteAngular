import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

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
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
