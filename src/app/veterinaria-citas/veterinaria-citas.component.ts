import { Component } from '@angular/core';

@Component({
  selector: 'app-veterinaria-citas',
  templateUrl: './veterinaria-citas.component.html',
  styleUrls: ['./veterinaria-citas.component.css']
})
export class VeterinariaCitasComponent {
  // usuario de localstorage
  usuario: any = localStorage.getItem('usuario');
  // usuario parseado
  usuarioParseado: any = JSON.parse(this.usuario) || {};
  // nombre del usuario
  nombre: string = this.usuarioParseado.nombre;
  perfil: string = this.usuarioParseado.perfil;

  constructor() { }

}
