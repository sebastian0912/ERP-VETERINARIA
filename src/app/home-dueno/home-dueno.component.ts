import { Component } from '@angular/core';

@Component({
  selector: 'app-home-dueno',
  templateUrl: './home-dueno.component.html',
  styleUrls: ['./home-dueno.component.css']
})
export class HomeDuenoComponent {
  // usuario de localstorage
  usuario: any = localStorage.getItem('usuario');
  // usuario parseado
  usuarioParseado: any = JSON.parse(this.usuario) || {};
  // nombre del usuario
  nombre: string = this.usuarioParseado.nombre;
  perfil: string = this.usuarioParseado.perfil;

  constructor() { }
}
