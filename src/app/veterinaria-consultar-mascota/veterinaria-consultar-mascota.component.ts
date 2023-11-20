import { Component } from '@angular/core';

@Component({
  selector: 'app-veterinaria-consultar-mascota',
  templateUrl: './veterinaria-consultar-mascota.component.html',
  styleUrls: ['./veterinaria-consultar-mascota.component.css']
})
export class VeterinariaConsultarMascotaComponent {
  // usuario de localstorage
  usuario: any = localStorage.getItem('usuario');
  // usuario parseado
  usuarioParseado: any = JSON.parse(this.usuario) || {};
  // nombre del usuario
  nombre: string = this.usuarioParseado.nombre;
  perfil: string = this.usuarioParseado.perfil;

  constructor() { }
}
