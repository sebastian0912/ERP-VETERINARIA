import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeDuenoComponent } from './home-dueno/home-dueno.component';
import { HomeVeterinariaComponent } from './home-veterinaria/home-veterinaria.component';
import { VeterinariaAgregarProductoComponent } from './veterinaria-agregar-producto/veterinaria-agregar-producto.component';
import { VeterinariaInventarioComponent } from './veterinaria-inventario/veterinaria-inventario.component';
import { VeterinariaCitasComponent } from './veterinaria-citas/veterinaria-citas.component';
import { VeterinariaConsultarMascotaComponent } from './veterinaria-consultar-mascota/veterinaria-consultar-mascota.component';
import { RegistreseComponent } from './registrese/registrese.component';
import { DuenoRegistroMascotasComponent } from './dueno-registro-mascotas/dueno-registro-mascotas.component';
import { DuenoListarServiciosComponent } from './dueno-listar-servicios/dueno-listar-servicios.component';
import { DuenoAgendarComponent } from './dueno-agendar/dueno-agendar.component';
import { DuenoPagarComponent } from './dueno-pagar/dueno-pagar.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home-dueno', component: HomeDuenoComponent },
    { path: 'veterinaria', component: HomeVeterinariaComponent },
    { path: 'veterinaria-agregar-producto', component: VeterinariaAgregarProductoComponent },
    { path: 'veterinaria-inventario', component: VeterinariaInventarioComponent},
    { path: 'veterinaria-citas', component:VeterinariaCitasComponent },
    { path: 'consultarMascota', component: VeterinariaConsultarMascotaComponent},
    { path: 'registrese', component: RegistreseComponent },
    { path: 'duenoRegistro', component: DuenoRegistroMascotasComponent },
    { path: 'listarServicios', component: DuenoListarServiciosComponent },
    { path: 'agendar', component: DuenoAgendarComponent},
    { path: 'pagar', component: DuenoPagarComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
