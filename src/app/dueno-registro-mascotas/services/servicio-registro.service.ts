import { Injectable } from '@angular/core';


interface DuenoMascotas {
  mascotas: any[]; // Reemplaza 'any' con una interfaz más específica si es necesario
}

@Injectable({
  providedIn: 'root'
})


export class ServicioRegistroService {

  constructor() { }
}
