import { Component, Input } from '@angular/core';
import { Curso } from '../../../interfaces/data.interfas';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-listacursos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listacursos.html',
  styleUrl: './listacursos.css'
})
export class Listacursos {
  @Input() cursos: Curso[] = [];
}
