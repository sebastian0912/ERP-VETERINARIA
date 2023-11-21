import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import Swal from 'sweetalert2';

interface DocumentoMascota {
  mascotas: any[];  // Reemplaza 'any[]' con un tipo más específico si es necesario
  // Agrega aquí otras propiedades que puedan estar en tu documento
}

@Component({
  selector: 'app-veterinaria-consultar-mascota',
  templateUrl: './veterinaria-consultar-mascota.component.html',
  styleUrls: ['./veterinaria-consultar-mascota.component.css']
})
export class VeterinariaConsultarMascotaComponent implements OnInit {
  // usuario de localstorage
  usuario: any = localStorage.getItem('usuario');
  // usuario parseado
  usuarioParseado: any = JSON.parse(this.usuario) || {};
  // nombre del usuario
  nombre: string = this.usuarioParseado.nombre;
  perfil: string = this.usuarioParseado.perfil;

  buscarMascota: FormGroup;
  mascotaData: any[] | null = null;


  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.buscarMascota = new FormGroup({
      cedula: new FormControl('', [Validators.required])
    });
  }

  aviso(titulo: any, icono: any) {
    Swal.fire({
      title: titulo,
      icon: icono,
    })
  }

  ngOnInit() { }

  buscarM() {
    console.log(this.buscarMascota.value);
    this.firestore.collection('mascotas').doc(this.buscarMascota.value.cedula).get().subscribe((respuesta) => {
      const datos = respuesta.data() as DocumentoMascota; // Usar la interfaz aquí
      if (datos && datos.mascotas) {
        this.mascotaData = datos.mascotas;
      } else {
        this.aviso('No se encontró la mascota o no hay mascotas para este dueño', 'error');
      }
    });
  }





}
