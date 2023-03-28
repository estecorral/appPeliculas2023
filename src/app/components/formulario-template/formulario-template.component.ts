import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisesService } from 'src/app/services/paises.service';
import { DateAdapter } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
  constructor(private paisesService: PaisesService, private dateAdapter: DateAdapter<any>, private snackBar: MatSnackBar,
    private router: Router) {
    this.dateAdapter.setLocale('es');
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    this.minDate = new Date(currentYear -100, 0, 1);
    this.maxDate = new Date(currentYear - 18, 3, 0);
    this.getData();
  }

  ngOnInit() {
    this.paisesService.getPaises().subscribe((paises: any) => {
      this.paises = paises;
    });
  }
  getData() {
    if(this.router.getCurrentNavigation()?.extras.state){
      const data = this.router.getCurrentNavigation()?.extras.state;
      console.log(data);
      this.datosRegistro = data?.['data'];
    }
  }
  sendForm(form: NgForm) {
    if(form.invalid) {
      console.log(form);
      this.snackBar.open('Datos no válidos, compruebe los campos marcados en rojo', 'Cerrar', {
        duration: 5000
      });
      return;
    }
    this.router.navigate(['confirmar'], {state: {registro: form.value}});
  }
}
