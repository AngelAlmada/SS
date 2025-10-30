import { Component } from '@angular/core';
import { ObtenerDatos } from '../../services/obtener-datos/obtener-datos';
import { Curso } from '../../../interfaces/data.interfas';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  imports: [RouterModule, CommonModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class Cursos {
  cursos: Curso[] = [];

  constructor(private obtenerDatosService: ObtenerDatos) {}

  ngOnInit() {
    // Carga de cursos desde el servicio
    this.cursos = this.obtenerDatosService.obtenerDatos();

    // Ejemplo de verificación en consola
    console.log('Cursos cargados:', this.cursos);
  }
}
