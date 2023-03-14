import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisesService } from 'src/app/services/paises.service';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css'],
})
export class FormularioTemplateComponent {
  datosRegistro = {
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    ciudad: '',
    pais: '',
    nacimiento: '',
    genero: '',
  }
  paises: any [] = [];
  minDate: Date = new Date();
  maxDate: Date = new Date();
  constructor(private paisesService: PaisesService, private dateAdapter: DateAdapter<any>) {
    this.dateAdapter.setLocale('es');
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    this.minDate = new Date(currentYear -100, 0, 1);
    this.maxDate = new Date(currentYear - 18, 3, 0);
  }

  ngOnInit() {
    this.paisesService.getPaises().subscribe((paises: any) => {
      this.paises = paises;
    });
  }
  sendForm(form: NgForm) {
    if(form.valid) {
      console.log(form.value);
    }
    console.log(form);
    return;
  }
}
