import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-registro',
  templateUrl: './confirmar-registro.component.html',
  styleUrls: ['./confirmar-registro.component.css']
})
export class ConfirmarRegistroComponent {
  public data: any;
  constructor(private router: Router, private snackBar: MatSnackBar) {
    this.data = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.data);
  }

  sendData() {
    this.snackBar.open('Datos registrados correctamente', 'Cerrar', {
      duration: 3000
    });
    this.router.navigate(['']);
  }

  editData() {
    this.router.navigate(['reactivo'], {state: {'data': this.data.registro}});
  }
}
