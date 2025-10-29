import { FirebaseService } from './../../services/firebase.service';
import { Component } from '@angular/core';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // 1. IMPORTAR CommonModule

@Component({
  selector: 'app-identidad',
  standalone: true, // 2. AÑADIR standalone
  imports: [CommonModule], // 3. AÑADIR CommonModule (para el @if en tu HTML)
  templateUrl: './identidad.html',
  styleUrl: './identidad.css',
})
export class Identidad {
  user: User | null = null;

  constructor(private auth: Auth, private router: Router, private firebaseService: FirebaseService) {}

  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
      console.log('Usuario actual:', user);
    });
  }

  logout() {
    this.firebaseService.logout()
      .then(() => {
        console.log('Sesión cerrada');
        // this.router.navigate(['/login']); // Tu servicio ya hace esto
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  }

  handleClick() {
    if (this.user) {
      this.router.navigate(['/miperfil']); // Redirige a /mi-perfil
     }
    else {
      this.router.navigate(['/login']); // Redirige al login si no está autenticado
    }
  }

}