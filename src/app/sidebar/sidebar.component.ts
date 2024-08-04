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
                icon: 'pi pi-verified'
            },
            {
                label: 'Busca a tu Experto',
                icon: 'pi pi-search',
            },
            {
                label: 'Conocenos',
                icon: 'pi pi-envelope'
            },
            {
                label: 'Iniciar sesión',
                icon: 'pi pi-user'
            }
        ]
    }
}