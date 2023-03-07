import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css'],
})
export class FormularioTemplateComponent {
  datosRegistro = {
    nombre: '',
    apellidos: '',
  }
  sendForm(form: NgForm) {
    console.log(form.value);
  }
}
