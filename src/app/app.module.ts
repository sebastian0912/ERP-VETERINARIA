import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// importar formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { HomeDuenoComponent } from './home-dueno/home-dueno.component';
import { HomeVeterinariaComponent } from './home-veterinaria/home-veterinaria.component';
import { MenuVeterinariaComponent } from './menu-veterinaria/menu-veterinaria.component';
import { VeterinariaAgregarProductoComponent } from './veterinaria-agregar-producto/veterinaria-agregar-producto.component';
import { VeterinariaInventarioComponent } from './veterinaria-inventario/veterinaria-inventario.component';
import { VeterinariaCitasComponent } from './veterinaria-citas/veterinaria-citas.component';
import { VeterinariaConsultarMascotaComponent } from './veterinaria-consultar-mascota/veterinaria-consultar-mascota.component';
import { RegistreseComponent } from './registrese/registrese.component';
import { MenuduenoComponent } from './menudueno/menudueno.component';
import { DuenoRegistroMascotasComponent } from './dueno-registro-mascotas/dueno-registro-mascotas.component';
import { DuenoListarServiciosComponent } from './dueno-listar-servicios/dueno-listar-servicios.component';
import { DuenoAgendarComponent } from './dueno-agendar/dueno-agendar.component';
import { DuenoPagarComponent } from './dueno-pagar/dueno-pagar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeDuenoComponent,
    HomeVeterinariaComponent,
    MenuVeterinariaComponent,
    VeterinariaAgregarProductoComponent,
    VeterinariaInventarioComponent,
    VeterinariaCitasComponent,
    VeterinariaConsultarMascotaComponent,
    RegistreseComponent,
    MenuduenoComponent,
    DuenoRegistroMascotasComponent,
    DuenoListarServiciosComponent,
    DuenoAgendarComponent,
    DuenoPagarComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    // importar formularios reactivos
    ReactiveFormsModule,

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyADO-ig7WnLyV4oCanAYPk-vFsArLxMeMg",
      authDomain: "erp-veterinaria.firebaseapp.com",
      projectId: "erp-veterinaria",
      storageBucket: "erp-veterinaria.appspot.com",
      messagingSenderId: "335094613277",
      appId: "1:335094613277:web:13097344ac92d816abcdf4",
      measurementId: "G-119GQTW1WJ"
    }),

    /*provideAuth(() => {
      const auth = getAuth();
      connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
      return auth;
    }),

    provideFirestore(() => {
      const firestore = getFirestore();
      connectFirestoreEmulator(firestore, 'localhost', 8080);
      return firestore;
    })*/


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
