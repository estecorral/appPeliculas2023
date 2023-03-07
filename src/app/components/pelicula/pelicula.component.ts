import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasServiceService } from 'src/app/services/peliculas-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
  public infoData: string = '';
  public id: string | null = '';
  public titulo: string | null = '';
  public peliculaData: any;
  public backdropPath: string = '';
  public actores: any;
  public puntuacion: number = 0;
  constructor(public route: ActivatedRoute, private peliculasService: PeliculasServiceService,
    private snackBar: MatSnackBar) {
    
  }
  ngOnInit() {
    this.route.data.subscribe((info: any) => {
      this.infoData = info.info;
    });
    this.id = this.route.snapshot.paramMap.get('id');
    this.titulo = this.route.snapshot.paramMap.get('titulo');
    this.peliculasService.getPeliculaData(this.id).subscribe((data: any) =>{
      this.peliculaData = data;
      this.backdropPath =
        'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces' +
        this.peliculaData.backdrop_path;
        this.puntuacion = this.peliculaData.vote_average;
        this.peliculasService.getCredits(this.id).subscribe((data: any) => {
          console.log(data.cast);
          this.actores = data.cast;
        });
    });
  }

  userPuntuacion(event: any) {
    // console.log(event);
    this.puntuacion = event;
    this.snackBar.open('Has puntuado la pelicula con: ' + event, 'Cerrar', {
      duration: 6000,
    });
  }
}
