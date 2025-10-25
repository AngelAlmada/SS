import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-cursos',
  imports: [],
  templateUrl: './detalles-cursos.html',
  styleUrl: './detalles-cursos.css'
})
export class DetallesCursos {
  titulo!: string;

  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.titulo = this .route.snapshot.paramMap.get('titulo')!;
    console.log('Titulo recibido:', this.titulo);
  }
}
