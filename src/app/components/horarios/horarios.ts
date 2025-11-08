import { Component, Input, OnInit } from '@angular/core';
import { DatePipe, NgFor, NgClass, CommonModule } from '@angular/common';
import { RegistersService, RegistroCurso } from '../../services/registers.service';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [DatePipe, NgFor, NgClass, CommonModule],
  templateUrl: './horarios.html',
  styleUrls: ['./horarios.css'],
})
export class Horarios implements OnInit {
  @Input() fechas: string[] = [];    // Fechas del curso
  @Input() cursoId: string = '';     // ID o título del curso

  selectedDate: string | null = null;
  registroExistente: RegistroCurso | null = null;
  hoy: Date = new Date();

  private registersService = inject(RegistersService);
  private auth = inject(Auth);
  private router = inject(Router);

  ngOnInit() {
    this.cargarRegistroUsuario();
    // Filtrar fechas pasadas
    this.fechas = this.fechas.filter(fecha => !this.fechaPasada(fecha));
  }

  fechaPasada(fecha: string): boolean {
    const fechaCurso = new Date(fecha);
    fechaCurso.setHours(0, 0, 0, 0);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    return fechaCurso < hoy;
  }

  async cargarRegistroUsuario() {
    const user = this.auth.currentUser;
    if (!user) return;

    for (let fecha of this.fechas) {
      const registro = await this.registersService.getRegistro(user.uid, this.cursoId, fecha);
      if (registro) {
        this.registroExistente = registro;
        this.selectedDate = registro.fechaCurso;
        break; // Si ya hay un registro, no necesitamos buscar más
      }
    }
  }

  seleccionarFecha(fecha: string): void {
    if (this.fechaPasada(fecha) || this.registroExistente) return;
    this.selectedDate = fecha;
  }

  async inscribirse(): Promise<void> {
    if (!this.selectedDate) {
      alert('Por favor selecciona una fecha antes de inscribirte.');
      return;
    }

    const user = this.auth.currentUser;
    if (!user) {
      alert('Debes iniciar sesión para inscribirte en un curso.');
      return;
    }

    try {
      const exito = await this.registersService.registerCurso(user.uid, this.cursoId, this.selectedDate);
      if (exito) {
        this.registroExistente = {
          uid: user.uid,
          cursoId: this.cursoId,
          fechaCurso: this.selectedDate,
          registradoEn: new Date().toISOString(),
        };
        alert(`¡Te has inscrito correctamente en la fecha ${this.selectedDate}!`);
      }
    } catch (error) {
      console.error('Error al inscribirse:', error);
      alert('No se pudo realizar la inscripción. Intenta nuevamente.');
    }
  }

  consultarRegistro() {
    if (this.registroExistente) {
      // Aquí rediriges a la vista donde mostrarás la información del registro
      this.router.navigate(['/mi-curso', this.cursoId, this.registroExistente.fechaCurso]);
    }
  }
}
