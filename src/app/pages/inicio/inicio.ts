import { Listacursos } from '../../components/listacursos/listacursos';
import { cursos } from './../../../data/data';
import { Identidad } from '../../components/identidad/identidad';
import { Component, signal } from '@angular/core';
import { Componenteprincipal } from '../../components/componenteprincipal/componenteprincipal';
import { Curso } from '../../../interfaces/data.interfas';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [Listacursos, Identidad, Componenteprincipal, DatePipe, CommonModule],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css'],
})
export class Inicio {
  cursos: Curso[] = cursos;
  current = signal<Curso | null>(null);

  ngOnInit() {
    this.getCurrentCurso(); // ✅ Se ejecuta al montar el componente
  }

  getCurrentCurso() {
    const hoy = new Date();

    //
    let cursoMasCercano: Curso | null = null;
    let diferenciaMinima = Infinity;

    //Se recorren todos los cursos
    for (const curso of this.cursos) {
      for (const fechaStr of curso.fecha) {
        {
          const fecha = new Date(fechaStr);
          const diferencia = fecha.getTime() - hoy.getTime();

          if (diferencia >= 0 && diferencia < diferenciaMinima) {
            diferenciaMinima = diferencia;
            cursoMasCercano = curso;
          }
        }
      }
    }
    this.current.set(cursoMasCercano);
  }
}
