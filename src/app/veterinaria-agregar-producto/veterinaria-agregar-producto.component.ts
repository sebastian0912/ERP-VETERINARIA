import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veterinaria-agregar-producto',
  templateUrl: './veterinaria-agregar-producto.component.html',
  styleUrls: ['./veterinaria-agregar-producto.component.css']
})
export class VeterinariaAgregarProductoComponent implements OnInit {
  // usuario de localstorage
  usuario: any = localStorage.getItem('usuario');
  // usuario parseado
  usuarioParseado: any = JSON.parse(this.usuario) || {};
  // nombre del usuario
  nombre: string = this.usuarioParseado.nombre;
  perfil: string = this.usuarioParseado.perfil;

  constructor() { }

  ngOnInit(): void { }
}
