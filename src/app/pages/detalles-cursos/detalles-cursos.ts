import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../../../interfaces/data.interfas';
import { ObtenerDatos } from './../../services/obtener-datos/obtener-datos';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { CommonModule, NgIf } from '@angular/common'; // 👈 Agregar esto

// Importa los componentes standalone
import { Componenteprincipal } from '../../components/componenteprincipal/componenteprincipal';
import { Horarios } from '../../components/horarios/horarios';

@Component({
  selector: 'app-detalles-cursos',
  standalone: true,
  imports: [Componenteprincipal, Horarios, NgIf, CommonModule],
  templateUrl: './detalles-cursos.html',
  styleUrls: ['./detalles-cursos.css'],
})
export class DetallesCursos {
  public notyf = new Notyf();
  titulo!: string;
  curso?: Curso;

  constructor(
    private route: ActivatedRoute,
    private ObtenerDatosService: ObtenerDatos
  ) {}

  ngOnInit(): void {
    this.titulo = this.route.snapshot.paramMap.get('titulo')!;
    this.curso = this.ObtenerDatosService.obtenerPorTitulo(this.titulo);

    if (!this.curso) {
      this.notyf.error('No se encontró ningún curso con ese título.');
    }
  }

  // Se ejecuta cuando el usuario selecciona e intenta inscribirse
  onFechaSeleccionada(fecha: any) {
    const fechaStr = fecha as string;
    if (this.curso) {
      console.log(
        `Usuario inscrito al curso "${this.curso.titulo}" en la fecha ${fechaStr}`
      );
      this.notyf.success(`Inscripción confirmada para el ${fechaStr}`);
    }
  }
}
