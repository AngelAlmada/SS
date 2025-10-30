import { ObtenerDatos } from './../../services/obtener-datos/obtener-datos';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../../../interfaces/data.interfas';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Componenteprincipal } from "../../components/componenteprincipal/componenteprincipal";

@Component({
  selector: 'app-detalles-cursos',
  imports: [Componenteprincipal],
  templateUrl: './detalles-cursos.html',
  styleUrl: './detalles-cursos.css'
})
export class DetallesCursos {
  public notyf = new Notyf();
  titulo!: string;
  curso?: Curso;

  constructor(private route: ActivatedRoute, private ObtenerDatosService: ObtenerDatos) {}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.titulo = this .route.snapshot.paramMap.get('titulo')!;
    this.curso = this.ObtenerDatosService.obtenerPorTitulo(this.titulo);

    if (this.curso) {
      console.log('Curso encontrado:', this.curso);
    } else {
      this.notyf.error('No se encontró ningún curso con ese título.');
    }
  }


}
