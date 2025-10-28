import { Listacursos } from '../../components/listacursos/listacursos';
import { cursos } from './../../../data/data';
import { Identidad } from '../../components/identidad/identidad';
import { Component } from '@angular/core';
import { Componenteprincipal } from "../../components/componenteprincipal/componenteprincipal";
import { Curso } from '../../../interfaces/data.interfas';

@Component({
  selector: 'app-inicio',
  imports: [Listacursos, Identidad, Componenteprincipal],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css'],
})
export class Inicio {
  cursos: Curso[] = cursos;
}
