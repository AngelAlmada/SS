import { Component, OnInit } from '@angular/core';
import { ObtenerDatos } from '../../services/obtener-datos/obtener-datos';
import { Curso } from '../../../interfaces/data.interfas';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class Cursos implements OnInit {
  cursos: Curso[] = [];

  constructor(private obtenerDatosService: ObtenerDatos) {}

  ngOnInit(): void {
    this.cursos = this.obtenerDatosService.obtenerDatos();
    console.log('Cursos cargados:', this.cursos);
  }
}
