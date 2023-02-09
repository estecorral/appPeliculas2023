import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasServiceService } from 'src/app/services/peliculas-service.service';

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
  constructor(public route: ActivatedRoute, private peliculasService: PeliculasServiceService) {
    
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
        this.peliculasService.getCredits(this.id).subscribe((data: any) => {
          console.log(data.cast);
          this.actores = data.cast;
        });
    });
  }
}
