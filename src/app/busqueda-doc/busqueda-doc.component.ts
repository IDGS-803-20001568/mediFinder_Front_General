import { BusquedaDocService } from './../service/busqueda-doc.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-busqueda-doc',
  templateUrl: './busqueda-doc.component.html',
  styleUrls: ['./busqueda-doc.component.css']
})
export class BusquedaDocComponent implements OnInit {
  doctors: any[] = [];
  filteredDoctors: any[] = [];
  searchTerm: string = '';

  constructor(private BusquedaDocService: BusquedaDocService) { }

  ngOnInit(): void {
    this.doctors = this.BusquedaDocService.getDoctors();
    this.filteredDoctors = this.doctors;
  }

  filterDoctors() {
    if (this.searchTerm) {
      this.filteredDoctors = this.doctors.filter(doctor =>
        doctor.especialidad.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredDoctors = this.doctors;
    }
  }
}
