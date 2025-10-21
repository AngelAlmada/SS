import { Component, Input } from '@angular/core';
import { Curso } from '../../../interfaces/data.interfas';

@Component({
  selector: 'app-listacursos',
  imports: [],
  templateUrl: './listacursos.html',
  styleUrl: './listacursos.css'
})
export class Listacursos {
  @Input() cursos: Curso[] = [];
}
