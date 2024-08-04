import { Component, OnInit } from '@angular/core';
import { EspecialidadesService } from '../service/especialidades.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  especialidades: any[] = [];

  constructor(private especialidadesService: EspecialidadesService) {}

  ngOnInit(): void {
    this.especialidadesService.getEspecialidades().subscribe(data => {
      this.especialidades = data;
      console.log(data);
      
    });
  }
}