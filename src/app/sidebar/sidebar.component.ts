import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    items: MenuItem[] | undefined;

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
                routerLink: '/#' // Enlace al componente DatosComponent

            }
        ]
    }
}