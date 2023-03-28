import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';
import { PaisesService } from 'src/app/services/paises.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css'],
})
export class FormularioReactivoComponent {
  formularioRegistro: FormGroup = this.formBuilder.group({});
  public paises: any;
  public datosRegistro = {
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    password2: '',
    telefono: '',
    pais: '',
    ciudad: '',
    direccion: {
      calle: '',
      numero: '',
    },
    nacimiento: '',
    genero: '',
  };
  constructor(private formBuilder: FormBuilder, private validatorsService: ValidadoresService, private paisesService: PaisesService,
    private router: Router, public snackBar: MatSnackBar) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      const data = this.router.getCurrentNavigation()?.extras.state;
      this.datosRegistro = data?.['data'];
      console.log(this.datosRegistro);
      // this.formularioRegistro.setValue(data?.['data']);
    } 
    this.createForm();
    this.paisesService.getPaises().subscribe((data: any) => {
      this.paises = data;
      console.log(this.paises);
    });
  }
  createForm() {
    this.formularioRegistro = this.formBuilder.group({
      nombre: [
        this.datosRegistro.nombre,
        [Validators.required, Validators.minLength(3)],
      ],
      apellidos: [
        this.datosRegistro.apellidos,
        [Validators.required, Validators.minLength(5)],
      ],
      email: [
        this.datosRegistro.email,
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(5)]],
      password2: ['', [Validators.required, Validators.minLength(5)]],
      telefono: [this.datosRegistro.telefono, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      pais: [this.datosRegistro.pais, Validators.required],
      ciudad: [this.datosRegistro.ciudad, Validators.required],
      direccion: this.formBuilder.group({
        calle: [this.datosRegistro.direccion.calle, Validators.required],
        numero: [this.datosRegistro.direccion.numero, Validators.required]
      }),
      nacimiento: [this.datosRegistro.nacimiento, Validators.required],
      genero: [this.datosRegistro.genero, Validators.required]
    }, {
      validators:[this.validatorsService.checkPasswords('password', 'password2')]
    });
  
  }

  get passwordInvalido() {
    const password1 = this.formularioRegistro.get('password');
    const password2 = this.formularioRegistro.get('password2');
    return (password1?.value === password2?.value) ? false : true;
  }
  sendForm() {
    console.log('Form Data: ', this.formularioRegistro.value);
    if(this.formularioRegistro.status === 'INVALID') {
      this.snackBar.open('El formulario no está correcto', 'cerrar', {
        duration: 5000
      });
      return;
    }
    this.router.navigate(['confirmar'], {state: {registro: this.formularioRegistro.value}});
  }

  limpiarDatos() {
    this.formularioRegistro.reset();
  }
}
