import { Listacursos } from '../../components/listacursos/listacursos';
import { cursos } from './../../../data/data';
import { Identidad } from '../../components/identidad/identidad';
import { Component } from '@angular/core';
import { Componenteprincipal } from "../../components/componenteprincipal/componenteprincipal";

interface Curso {
  titulo: string;
  descripcion: string;
  fecha: string; // o Date si quieres manejar objetos de fecha
  subcursos: string[]; // lista de temas o módulos
  imagenPath: string;  // ruta o URL de la imagen
}

@Component({
  selector: 'app-inicio',
  imports: [Listacursos, Identidad, Componenteprincipal],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  cursos: Curso[] = cursos;
}
