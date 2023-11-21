import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import Swal from 'sweetalert2';

interface DuenoMascotas {
  mascotas: any[]; // Reemplaza 'any' con una interfaz más específica si es necesario
}
@Component({
  selector: 'app-dueno-registro-mascotas',
  templateUrl: './dueno-registro-mascotas.component.html',
  styleUrls: ['./dueno-registro-mascotas.component.css']
})


export class DuenoRegistroMascotasComponent implements OnInit {
  // usuario de localstorage
  usuario: any = localStorage.getItem('usuario');
  // usuario parseado
  usuarioParseado: any = JSON.parse(this.usuario) || {};
  // nombre del usuario
  nombre: string = this.usuarioParseado.nombre;
  perfil: string = this.usuarioParseado.perfil;

  registroMascota: FormGroup;
  imagenPrevisualizacion: string | ArrayBuffer | null | any;

  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.registroMascota = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      raza: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
      peso: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      especie: new FormControl('', [Validators.required]),
      observaciones: new FormControl('', [Validators.required]),
      dueno: new FormControl(this.usuarioParseado.cedula, [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      tipoVacuna: new FormControl(''), // Opcional, dependiendo de tus necesidades
      fechaVacuna: new FormControl(''), // Opcional, dependiendo de tus necesidades
      desparasitacion: new FormControl(''), // Opcional, dependiendo de tus necesidades
      esterilizado: new FormControl(false), // Asumiendo que es un campo booleano
      fechaEsterilizacion: new FormControl('') // Opcional, dependiendo de tus necesidades
    });
  }

  aviso(titulo: any, icono: any) {
    Swal.fire({
      title: titulo,
      icon: icono,
    })
  }

  ngOnInit() { }

  // mascotas
  mascota = {
    nombre: '',
    raza: '',
    edad: '',
    peso: '',
    sexo: '',
    color: '',
    especie: '',
    observaciones: '',
    foto: '',
    dueno: '',
    fechaNacimiento: '',
    tipoVacuna: '',
    fechaVacuna: '',
    desparasitacion: '',
    esterilizado: '',
    fechaEsterilizacion: ''
  };

  registrarMascota() {
    this.mascota.nombre = this.registroMascota.value.nombre;
    this.mascota.raza = this.registroMascota.value.raza;
    this.mascota.edad = this.registroMascota.value.edad;
    this.mascota.peso = this.registroMascota.value.peso;
    this.mascota.sexo = this.registroMascota.value.sexo;
    this.mascota.color = this.registroMascota.value.color;
    this.mascota.especie = this.registroMascota.value.especie;
    this.mascota.observaciones = this.registroMascota.value.observaciones;
    this.mascota.dueno = this.registroMascota.value.dueno;
    this.mascota.fechaNacimiento = this.registroMascota.value.fechaNacimiento;
    this.mascota.tipoVacuna = this.registroMascota.value.tipoVacuna;
    this.mascota.fechaVacuna = this.registroMascota.value.fechaVacuna;
    this.mascota.desparasitacion = this.registroMascota.value.desparasitacion;
    this.mascota.esterilizado = this.registroMascota.value.esterilizado;
    this.mascota.fechaEsterilizacion = this.registroMascota.value.fechaEsterilizacion;

    console.log(this.mascota);

    this.agregarMascota(this.mascota)
      .then(() =>
        this.aviso('Mascota agregada con éxito', 'success')
      )
      .catch(error =>
        this.aviso('Error al agregar la mascota', 'error')
      );

  }



  agregarMascota(mascota: any) {
    const duenoId = mascota.dueno;
    const mascotaRef = this.firestore.collection('mascotas').doc(duenoId);

    return this.firestore.firestore.runTransaction(async (transaction) => {
      const docSnapshot = await transaction.get(mascotaRef.ref);

      if (!docSnapshot.exists) {
        transaction.set(mascotaRef.ref, { mascotas: [mascota] });
      } else {
        const data = docSnapshot.data() as DuenoMascotas; // Aserto de tipo aquí
        const mascotasActualizadas = data.mascotas ? [...data.mascotas, mascota] : [mascota];
        transaction.update(mascotaRef.ref, { mascotas: mascotasActualizadas });
      }
    });
  }


  // Método para manejar la selección de archivo
  enArchivoSeleccionado(event: Event) {
    const elemento = event.target as HTMLInputElement;
    if (elemento && elemento.files && elemento.files.length) {
      const archivo = elemento.files[0];
      const filePath = `mascotas/${archivo.name}`; // Define una ruta para el archivo
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, archivo);

      // Obtener la URL de descarga cuando la carga esté completa
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.mascota.foto = url; // Guarda la URL en lugar de la cadena base64
            this.imagenPrevisualizacion = url; // Previsualización con la URL
          });
        })
      ).subscribe();
    }
  }


  limpiarCampoFile() {
    const inputElement = document.getElementById('foto') as HTMLInputElement;
    if (inputElement) {
      inputElement.value = '';
    }
  }




}
