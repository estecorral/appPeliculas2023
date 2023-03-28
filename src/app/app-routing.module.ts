import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmarRegistroComponent } from './components/confirmar-registro/confirmar-registro.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { FormularioTemplateComponent } from './components/formulario-template/formulario-template.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SerieComponent } from './components/serie/serie.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'pelicula/:id/:titulo', component: PeliculaComponent, data: {info: 'HOLA MUNDO'}},
  {path: 'serie', component: SerieComponent},
  {path: 'template', component: FormularioTemplateComponent},
  {path: 'reactivo', component: FormularioReactivoComponent},
  {path: 'confirmar', component: ConfirmarRegistroComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', pathMatch: 'full', redirectTo:'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
