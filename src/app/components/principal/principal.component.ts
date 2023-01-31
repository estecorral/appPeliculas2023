import { Component } from '@angular/core';
import peliculas from '../../../assets/movies.json';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  public peliculasData: any = peliculas;
  
  constructor() {

  }

  ngOnInit() {
    console.log(this.peliculasData);
  }
}
