// dialog.component.ts
import { Component, OnInit } from '@angular/core';
import { DialogService } from './../../service/dialog.service';
import { Router } from '@angular/router'; // Importa Router para redireccionar

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  visible: boolean = false;

  constructor(private dialogService: DialogService, private router: Router) {}

  ngOnInit() {
    this.dialogService.visible$.subscribe(visible => {
      this.visible = visible;
    });
  }

  hideDialog() {
    this.dialogService.hideDialog();
  }

  redirectTo(role: string) {
    // Redirige a la URL correspondiente según el rol
    if (role === 'doctor') {
      this.router.navigate(['/login-doctor']); // Cambia a la URL adecuada
    } else if (role === 'paciente') {
      this.router.navigate(['/login-paciente']); // Cambia a la URL adecuada
    }
    this.hideDialog(); // Cierra el diálogo después de redirigir
  }
}
