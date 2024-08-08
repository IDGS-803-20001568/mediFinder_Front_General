import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.css'],
  providers: [MessageService]  // Esto permite que MessageService sea disponible para este componente
})
export class ConocenosComponent {
  name: string = '';
  email: string = '';
  comments: string = '';

  constructor(private messageService: MessageService) {}

  onSubmit(): void {
    // Mostrar el toast
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Tus comentarios han sido enviados' });

    // Aquí podrías agregar lógica para enviar los datos a un servidor, si es necesario.
  }
}
