import { Component } from '@angular/core';

@Component({
  selector: 'app-veterinaria-inventario',
  templateUrl: './veterinaria-inventario.component.html',
  styleUrls: ['./veterinaria-inventario.component.css']
})
export class VeterinariaInventarioComponent {
  // usuario de localstorage
  usuario: any = localStorage.getItem('usuario');
  // usuario parseado
  usuarioParseado: any = JSON.parse(this.usuario) || {};
  // nombre del usuario
  nombre: string = this.usuarioParseado.nombre;
  perfil: string = this.usuarioParseado.perfil;

  constructor() { }
}
