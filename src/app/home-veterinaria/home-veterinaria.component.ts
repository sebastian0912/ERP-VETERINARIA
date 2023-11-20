import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-veterinaria',
  templateUrl: './home-veterinaria.component.html',
  styleUrls: ['./home-veterinaria.component.css']
})
export class HomeVeterinariaComponent implements OnInit{
    // usuario de localstorage
    usuario: any = localStorage.getItem('usuario');
    // usuario parseado
    usuarioParseado: any = JSON.parse(this.usuario) || {};
    // nombre del usuario
    nombre: string = this.usuarioParseado.nombre;
    perfil: string = this.usuarioParseado.perfil;

    constructor() { }

    ngOnInit(): void {    }



}
