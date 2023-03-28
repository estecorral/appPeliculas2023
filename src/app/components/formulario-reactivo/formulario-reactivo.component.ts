import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';
@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css'],
})
export class FormularioReactivoComponent {
  formularioRegistro: FormGroup = this.formBuilder.group({});
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
  constructor(private formBuilder: FormBuilder, private validatorsService: ValidadoresService) {
    this.createForm();
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
    console.log('Form Data: ', this.formularioRegistro);
  }
}
