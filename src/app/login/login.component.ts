import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from './services/autenticacion.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  correo = '';
  password: string = '';
  isLoggingIn = false;

  formHojaDeVida!: FormGroup;

  constructor(
    private authenticationService: AutenticacionService,
    private formHojaDeVidaBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formHojaDeVida = this.formHojaDeVidaBuilder.group({
      signInEmail: new FormControl('', [Validators.required, Validators.email]),
      signInPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  aviso(titulo: any, icono: any) {
    Swal.fire({
      title: titulo,
      icon: icono,
    })
  }

  login() {
    this.isLoggingIn = true;
    this.authenticationService.signIn({
      email: this.formHojaDeVida.value.signInEmail,
      password: this.formHojaDeVida.value.signInPassword
    }).subscribe(
      (user) => {
        this.isLoggingIn = false;
        const uid = user.uid; // Aquí obtienes el UID del usuario
        // consultar firestore para obtener el rol del usuario
        this.authenticationService.obtenerUsuarioPorUID(uid).subscribe(usuario => {

          if (usuario === undefined) {
            this.aviso('No tienes permisos para ingresar', 'error');
            return;
          }

          // guardar el usuario en el localstorage
          localStorage.setItem('usuario', JSON.stringify(usuario));

          if (usuario.perfil === 'dueno') {
            this.router.navigate(['/home-dueno']);
          }
          if (usuario.perfil === 'veterinaria') {
            this.router.navigate(['/veterinaria']);
          }

        });


      },
      (error) => {
        this.isLoggingIn = false;
        const errorMessage = error.message;

        // si contiene auth/invalid-login-credentials
        if (errorMessage.includes('auth/invalid-login-credentials')) {
          this.aviso('Correo o contraseña incorrectos', 'error');
          return;
        }

        // limpiar consola
        console.clear();

      }
    );
  }


}
