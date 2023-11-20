import { Component } from '@angular/core';
import { AutenticacionService } from '../login/services/autenticacion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-veterinaria',
  templateUrl: './menu-veterinaria.component.html',
  styleUrls: ['./menu-veterinaria.component.css']
})
export class MenuVeterinariaComponent {

  constructor(
    private autenticacionService: AutenticacionService,
    private router: Router
  ) { }

  logout() {
    this.autenticacionService.signOut().subscribe(() => {
      // eliminar todos los datos del localstorage
      localStorage.clear();
      // Redirige al usuario después de cerrar sesión, por ejemplo, a la página de inicio
      this.router.navigate(['/']);
    });
  }

}
