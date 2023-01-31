import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
  public infoData: string = '';
  public id: string | null = '';
  public titulo: string | null = '';
  constructor(public route: ActivatedRoute) {
    
  }
  ngOnInit() {
    this.route.data.subscribe((info: any) => {
      this.infoData = info.info;
    });
    this.id = this.route.snapshot.paramMap.get('id');
    this.titulo = this.route.snapshot.paramMap.get('titulo');
    console.log(this.id);
  }
}
