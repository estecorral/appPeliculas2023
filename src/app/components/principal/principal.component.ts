import { Component } from '@angular/core';
import peliculas from '../../../assets/movies.json';
import series from '../../../assets/series.json';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  public peliculasData: any = peliculas.slice(0, 5);
  public seriesData: any = series.slice(0 ,5);
  
  constructor() {

  }

  ngOnInit() {
    console.log(this.peliculasData);
    console.log(this.seriesData);
  }
}
