import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutenticacionService } from '../login/services/autenticacion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrese',
  templateUrl: './registrese.component.html',
  styleUrls: ['./registrese.component.css']
})
export class RegistreseComponent implements OnInit {
  miFormulario: FormGroup;

  constructor(
    private authenticationService: AutenticacionService,
    private router: Router,
  ) {
    this.miFormulario = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      nombre: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required])
    });


  }

  ngOnInit() { }

  usuario = {
    correo: '',
    nombre: '',
    contrasena: '',
    cedula: '',
    perfil: 'dueno'
  };

  onSubmit() {
    const usuario = {
      correo: this.miFormulario.value.correo,
      nombre: this.miFormulario.value.nombre,
      contrasena: this.miFormulario.value.contrasena,
      cedula: this.miFormulario.value.cedula,
      perfil: 'veterinaria'
    };

    this.authenticationService.registrarYGuardarUsuario(usuario).subscribe({
      next: () => {
        console.log('Usuario registrado y guardado en Firestore');
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error al registrar:', error);
      }
    });
  }




}
