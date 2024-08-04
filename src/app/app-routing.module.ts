import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatosComponent } from './datos/datos.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { BusquedaDocComponent } from './busqueda-doc/busqueda-doc.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' } ,
  { path: "home", component: HomeComponent },
  { path: "datos", component: DatosComponent },
  { path: "conocenos", component: ConocenosComponent },
  { path: "busqueda", component: BusquedaDocComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
