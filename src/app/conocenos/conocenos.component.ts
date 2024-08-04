import { Component } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.css']
})
export class ConocenosComponent {
  name: string = '';
  email: string = '';
  comments: string = '';

  onSubmit(): void {
    alert(`Comentarios enviados:
      Nombre: ${this.name}
      Correo Electrónico: ${this.email}
      Comentarios: ${this.comments}`);
    // Aquí podrías agregar lógica para enviar los datos a un servidor, si es necesario.
  }
}
