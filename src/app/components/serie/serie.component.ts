import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent {
  public id: string = '';
  public name: string = '';
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.id = params.id;
      this.name = params.name;
      console.log(this.id, this.name);
    });
  }
}
