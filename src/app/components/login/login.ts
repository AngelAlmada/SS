import { Component, signal } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private firebaseService: FirebaseService, private router: Router) {}


  email = signal<string>('');
  password = signal<string>('');

  validate(event: Event) {
    event.preventDefault(); // previene recarga de página
    this.login();
  }

  login() {
    this.firebaseService.login(this.email(), this.password());
  }

  loginGoogle() {
    this.firebaseService.loginGoogle();
  }

  goToRegister() {
    this.router.navigate(['/registro']);
  }

  async recoverPassword() {
    const email = this.email().trim();
    if (!email) {
      this.firebaseService.notyf.error('Ingresa tu correo para recuperar la contraseña.');
      return;
    }
    await this.firebaseService.sendPasswordReset(email);
  }
}
