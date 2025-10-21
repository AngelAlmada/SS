import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componenteprincipal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componenteprincipal.html',
  styleUrl: './componenteprincipal.css'
})
export class Componenteprincipal {
  @Input() icono!: string;      // Clase del ícono (ej. 'fa-solid fa-code')
  @Input() titulo!: string;     // Título del curso
  @Input() contenido!: string;  // Descripción del curso
  @Input() fechaCurso!: string; // Fecha del curso

  constructor() { }

  solicitarCurso(): void {
    console.log(`Navegando a los detalles del curso: ${this.titulo}`);
    // TODO: Aquí irá la lógica para navegar a la pantalla de detalles del curso.
  }

}
