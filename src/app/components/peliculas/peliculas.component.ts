import { Component } from '@angular/core';
import { PeliculasServiceService } from 'src/app/services/peliculas-service.service';
// import peliculas from '../../../assets/movies.json';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  public peliculasList: any = [];
  public page = 1;
  constructor(public peliculasService: PeliculasServiceService) {
    
  }

  ngOnInit() {
    this.peliculasService.getNowPlaying().subscribe((data: any) =>{
      this.peliculasList = data;
      console.log(data);
    })
    // this.peliculasList = this.peliculasService.getPeliculasData();
    console.log(this.peliculasList);
  }

  getMasPelis() {
    this.page = this.page + 1;
    this.peliculasService.getNowPlaying(this.page).subscribe((data: any) => {
      this.peliculasList = this.peliculasList.concat(data.results);
    });
  }
}
