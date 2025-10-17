import { Component, signal } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-registro',
  imports: [],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  constructor(private firebaseService: FirebaseService) {}

  user = signal<string>('');
  email = signal<string>('');
  password = signal<string>('');
  date = signal<string>('');
  confirmPassword = signal<string>('');

  validate(event: Event) {
    event.preventDefault(); // previene recarga de página

    if (
      !this.user() ||
      !this.email() ||
      !this.password() ||
      !this.confirmPassword() ||
      !this.date()
    ) {
      return alert('Por favor completa todos los campos');
    }

    this.register();
  }

  async register() {
    if (this.password() !== this.confirmPassword()) {
      return alert('Las contraseñas no coinciden');
    }

    try {
      await this.firebaseService.register(
        this.email(),
        this.password(),
        this.user(),
        this.date()
      );
      // La navegación a '/' ya la hace FirebaseService si todo sale bien
    } catch (error: any) {
      console.error('Error al registrar usuario:', error);
      alert(`Error: ${error.message || 'No se pudo registrar el usuario'}`);
    }
  }
}
