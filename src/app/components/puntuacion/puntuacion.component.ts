import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.css']
})
export class PuntuacionComponent {
  @Input() puntuacion: number = 0;
  @Output() newPuntuacion = new EventEmitter<number>();;

  ngOnInit() {
    console.log(this.puntuacion);
  }

  sendPuntuacion(value: number) {
    this.newPuntuacion.emit(value);
  }
}
