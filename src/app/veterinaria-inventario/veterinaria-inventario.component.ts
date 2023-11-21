import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-veterinaria-inventario',
  templateUrl: './veterinaria-inventario.component.html',
  styleUrls: ['./veterinaria-inventario.component.css']
})
export class VeterinariaInventarioComponent implements OnInit{
  // usuario de localstorage
  usuario: any = localStorage.getItem('usuario');
  // usuario parseado
  usuarioParseado: any = JSON.parse(this.usuario) || {};
  // nombre del usuario
  nombre: string = this.usuarioParseado.nombre;
  perfil: string = this.usuarioParseado.perfil;

  constructor() { }

  aviso(titulo: any, icono: any) {
    Swal.fire({
      title: titulo,
      icon: icono,
    })
  }

  ngOnInit() {
    this.aviso('Proximas caracteristicas', 'warning');
  }


}
