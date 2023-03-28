import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SeriesComponent } from './components/series/series.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SerieComponent } from './components/serie/serie.component';
import { FormularioTemplateComponent } from './components/formulario-template/formulario-template.component';
import { PuntuacionComponent } from './components/puntuacion/puntuacion.component';

import { PeliculasServiceService } from './services/peliculas-service.service';
import { SeriesServiceService } from './services/series-service.service';
import { ConfirmarRegistroComponent } from './components/confirmar-registro/confirmar-registro.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    ErrorComponent,
    PeliculasComponent,
    SeriesComponent,
    PeliculaComponent,
    SerieComponent,
    PuntuacionComponent,
    FormularioTemplateComponent,
    ConfirmarRegistroComponent,
    FormularioReactivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PeliculasServiceService,
    SeriesServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
