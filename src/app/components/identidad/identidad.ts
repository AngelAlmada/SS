import { FirebaseService } from './../../services/firebase.service';
import { Component } from '@angular/core';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identidad',
  imports: [],
  templateUrl: './identidad.html',
  styleUrl: './identidad.css',
})
export class Identidad {
  user: User | null = null;
  photoURL: string | null = null;

  constructor(private auth: Auth, private router: Router, private firebaseService: FirebaseService) {}

  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
      this.photoURL = user?.photoURL || null;
      console.log('Usuario actual:', user);
    });
  }

  logout() {
    this.firebaseService.logout()
      .then(() => {
        console.log('Sesión cerrada');
        this.router.navigate(['/login']); // Redirige al login
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  }

  handleClick() {
    if (this.user) {
      this.router.navigate(['/usuario']); // Redirige al perfil si el usuario está autenticado
     }
    else {
      this.router.navigate(['/login']); // Redirige al login si no está autenticado
    }
  }
}
