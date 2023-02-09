import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasServiceService } from 'src/app/services/peliculas-service.service';
// import peliculas from '../../../assets/movies.json';
import series from '../../../assets/series.json';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  public peliculasData: any = [];
  public seriesData: any = series.slice(0 ,5);
  
  constructor(private router: Router, public peliculasService: PeliculasServiceService) {

  }

  ngOnInit() {
    this.peliculasService.getUpcoming().subscribe((data: any) =>{
      console.log(data);
      this.peliculasData = data;
    });
    // this.peliculasData = this.peliculasService.get5Peliculas();
    console.log(this.peliculasData);
    console.log(this.seriesData);
  }

  goToSerie(id: string, titulo: string) {
    this.router.navigate(['/serie'], {queryParams: {'id': id, 'name': titulo}});
  }
}
