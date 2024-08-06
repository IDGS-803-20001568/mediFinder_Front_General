import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusquedaDocService {

  constructor() { }

  getDoctors() {
    return [
      {
        id: 1,
        nombre: 'Dr. Juan Pérez',
        especialidad: 'Cardiología',
        direccion: 'Calle Falsa 123, Ciudad',
        telefono: '555-1234',
        email: 'juan.perez@example.com'
      },
      {
        id: 2,
        nombre: 'Dra. Ana López',
        especialidad: 'Dermatología',
        direccion: 'Avenida Siempre Viva 456, Ciudad',
        telefono: '555-5678',
        email: 'ana.lopez@example.com'
      },
      {
        id: 1,
        nombre: 'Dr. Juan Pérez',
        especialidad: 'Cardiología',
        direccion: 'Calle Falsa 123, Ciudad',
        telefono: '555-1234',
        email: 'juan.perez@example.com'
      },
      {
        id: 1,
        nombre: 'Dr. Juan Pérez',
        especialidad: 'Cardiología',
        direccion: 'Calle Falsa 123, Ciudad',
        telefono: '555-1234',
        email: 'juan.perez@example.com'
      },
      {
        id: 1,
        nombre: 'Dr. Juan Pérez',
        especialidad: 'Cardiología',
        direccion: 'Calle Falsa 123, Ciudad',
        telefono: '555-1234',
        email: 'juan.perez@example.com'
      },
      // Agrega más doctores según sea necesario
    ];
  }
}
