import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'pelicula/:id/:titulo', component: PeliculaComponent, data: {info: 'HOLA MUNDO'}},
  {path: 'error', component: ErrorComponent},
  {path: '**', pathMatch: 'full', redirectTo:'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
