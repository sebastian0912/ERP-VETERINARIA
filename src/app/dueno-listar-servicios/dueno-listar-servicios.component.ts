import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface Servicio {
  email: string;
  imagen: string;
  infoAdicional: string;
  nombrePropietario: string;
  precio: string;
  servicio: string;
  telefono: string;
  tipoMascota: string;
}

@Component({
  selector: 'app-dueno-listar-servicios',
  templateUrl: './dueno-listar-servicios.component.html',
  styleUrls: ['./dueno-listar-servicios.component.css']
})
export class DuenoListarServiciosComponent implements OnInit {
  // usuario de localstorage
  usuario: any = localStorage.getItem('usuario');
  // usuario parseado
  usuarioParseado: any = JSON.parse(this.usuario) || {};
  // nombre del usuario
  nombre: string = this.usuarioParseado.nombre;
  perfil: string = this.usuarioParseado.perfil;

  servicios: any[] = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.obtenerServicios();
  }


  obtenerServicios() {
    this.firestore.collection('servicios').get().subscribe((respuesta) => {
      respuesta.docs.forEach(doc => {
        const data = doc.data() as { servicios: Servicio[] }; // Utiliza la interfaz aquí
        if (data.servicios && Array.isArray(data.servicios)) {
          this.servicios.push(...data.servicios);
        }
      });
      console.log(this.servicios);
    });
  }


}
