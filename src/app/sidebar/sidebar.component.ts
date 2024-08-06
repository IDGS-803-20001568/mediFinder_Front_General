import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService } from './../service/dialog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private dialogService: DialogService) {} // Inyecta el servicio aquí

    ngOnInit() {
        this.items = [
            {
                label: '¿Cómo protegemos los datos?',
                icon: 'pi pi-verified',
                routerLink: '/datos' // Enlace al componente DatosComponent

            },
            {
                label: 'Busca a tu Experto',
                icon: 'pi pi-search',
                routerLink: '/busqueda' // Enlace al componente DatosComponent

            },
            {
                label: 'Conocenos',
                icon: 'pi pi-envelope',
                routerLink: '/conocenos' // Enlace al componente DatosComponent

            },
            {
                label: 'Iniciar sesión',
                icon: 'pi pi-user',
                command: () => this.dialogService.showDialog() // Usa el servicio para mostrar el diálogo
            }
        ]
    }
}
