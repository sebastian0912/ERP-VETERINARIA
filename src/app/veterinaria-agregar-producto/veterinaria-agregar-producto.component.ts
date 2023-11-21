import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { arrayUnion } from '@angular/fire/firestore';


import Swal from 'sweetalert2';

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

  servicioForm: FormGroup;
  imageUrl: string = '';

  precioNumerico: number = 0;


  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.servicioForm = new FormGroup({
      servicio: new FormControl(''),
      nombrePropietario: new FormControl(''),
      email: new FormControl(''),
      telefono: new FormControl(''),
      tipoMascota: new FormControl(''),
      infoAdicional: new FormControl(''),
      precio: new FormControl('')

    });
  }

  servicio = {
    servicio: '',
    nombrePropietario: '',
    email: '',
    telefono: '',
    tipoMascota: '',
    infoAdicional: '',
    precio: '',
    imagen: ''
  };

  ngOnInit(): void { }

  enArchivoSeleccionado(event: Event) {
    const elemento = event.target as HTMLInputElement;
    if (elemento && elemento.files && elemento.files.length) {
      const archivo = elemento.files[0];
      const filePath = `${this.usuarioParseado.cedula}/servicios/${archivo.name}`; // Define una ruta para el archivo
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, archivo);

      // Obtener la URL de descarga cuando la carga esté completa
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.imageUrl = url; // Guarda la URL
          });
        })
      ).subscribe();
    }
  }

  formatearPrecioEnTiempoReal(event: any): void {
    let valor = event.target.value;
    valor = valor.replace(/[^\d]/g, ''); // Elimina todo lo que no sea dígitos
    if (valor) {
      this.precioNumerico = parseFloat(valor); // Actualiza el valor numérico
      event.target.value = new Intl.NumberFormat('es-ES').format(Number(valor));
    } else {
      this.precioNumerico = 0; // Asegúrate de manejar el caso de un string vacío
    }
  }






  aviso(titulo: any, icono: any) {
    Swal.fire({
      title: titulo,
      icon: icono,
    })
  }


  onSubmit() {
    console.log(this.servicioForm.value);
    this.servicio = this.servicioForm.value;
    this.servicio.servicio = this.servicioForm.value.servicio;
    this.servicio.nombrePropietario = this.servicioForm.value.nombrePropietario;
    this.servicio.email = this.servicioForm.value.email;
    this.servicio.telefono = this.servicioForm.value.telefono;
    this.servicio.tipoMascota = this.servicioForm.value.tipoMascota;
    this.servicio.infoAdicional = this.servicioForm.value.infoAdicional;
    this.servicio.precio = String(this.precioNumerico);

    console.log(this.imageUrl);

    // Validar que se haya seleccionado una imagen
    if (this.imageUrl !== null) {
      this.servicio.imagen = this.imageUrl;
    } else {
      this.aviso('Debe seleccionar una imagen', 'warning');
      return;
    }

    // VALIDAR QUE TODOS LOS CAMPOS ESTEN LLENOS
    if (this.servicio.servicio === '' || this.servicio.nombrePropietario === '' || this.servicio.email === '' || this.servicio.telefono === '' || this.servicio.tipoMascota === '' || this.servicio.infoAdicional === '' || this.servicio.precio === '') {
      this.aviso('Debe llenar todos los campos', 'warning');
      return;
    }

    console.log(this.servicio);

    if (this.servicio.imagen === '') {
      this.aviso('No se cargo la imagen, vuelva a intentarlo', 'warning');
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Servicio solicitado',
      text: 'En breve nos comunicaremos con usted',
      showConfirmButton: false,
      timer: 3000
    });


    const usuarioDocRef = this.firestore.collection('servicios').doc(this.usuarioParseado.cedula);

    usuarioDocRef.get().subscribe(docSnapshot => {
      if (docSnapshot.exists) {
        usuarioDocRef.update({
          servicios: arrayUnion(this.servicio)
        });
      } else {
        // El documento no existe, puedes optar por crearlo
        usuarioDocRef.set({
          servicios: [this.servicio]
          // Aquí puedes agregar otros campos iniciales si es necesario
        });
      }
    });




  }

}
