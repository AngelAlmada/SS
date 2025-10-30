import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
import { DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './miperfil.html',
  styleUrls: ['./miperfil.css']
})
export class MiPerfilComponent implements OnInit {
  
  userProfile: DocumentData | null = null;
  isLoading: boolean = true;

  fotoCargadaCorrectamente: boolean = true;

  constructor(
    private auth: Auth, 
    private router: Router, 
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        try {
          this.userProfile = await this.firebaseService.getUserProfile(user.uid);
        } catch (error) {
          console.error("Error al traer el perfil:", error);
          this.userProfile = null;
        } finally {
          this.isLoading = false;
        }
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  logout() {
    this.firebaseService.logout();
  }
}