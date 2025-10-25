import { Component } from '@angular/core';
import { ObtenerDatos } from '../../services/obtener-datos/obtener-datos';
import { Curso } from '../../../interfaces/data.interfas';
@Component({
  selector: 'app-cursos',
  imports: [],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class Cursos {
  constructor(private obtenerDatosService: ObtenerDatos) {}

  ngOnInit() {
    const cursos: Curso[] = this.obtenerDatosService.obtenerDatos();

    const cursoAI = cursos.find(curso => curso.titulo === 'Introducción a las IAs');
    console.log(cursoAI);
  }
}