import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from '@angular/fire/auth';
import {
  addDoc,
  collection,
  Firestore,
  getDocs,
  query,
  where,
  doc,        
  setDoc,      
  getDoc, 
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { updateProfile } from 'firebase/auth';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  public notyf = new Notyf();

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router
  ) {}

async getUserProfile(uid: string): Promise<any | null> {
  // 1. Apunta a la colección 'users'
  const colRef = collection(this.firestore, 'users');

  // 2. Crea la consulta para buscar el documento donde el campo 'uid' coincida
  const q = query(colRef, where('uid', '==', uid));

  try {
    // 3. Ejecuta la consulta
    const querySnapshot = await getDocs(q);

    // 4. Comprueba si se encontraron resultados
    if (!querySnapshot.empty) {
      // 5. Devuelve los datos del primer documento encontrado
      return querySnapshot.docs[0].data();
    } else {
      console.warn('No se encontró un perfil para el uid:', uid);
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el perfil:', error);
    return null;
  }
}

// En src/app/services/firebase.service.ts

  async loginGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      const user = result.user;

      // --- INICIO DE LA LÓGICA DE FOTO EN ALTA RESOLUCIÓN ---
      
      let highResPhotoURL = user.photoURL; // Empezamos con la URL por defecto

      if (user.photoURL && user.photoURL.includes('googleusercontent.com')) {
        // 1. Si es una URL de Google, reemplazamos el tamaño
        // Cambia '=s96-c' (tamaño 96px) por '=s400-c' (tamaño 400px)
        highResPhotoURL = user.photoURL.replace('=s96-c', '=s400-c');
      }

      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      
      const profileData = {
        uid: user.uid,
        email: user.email,
        nombre: user.displayName,
        fotoURL: highResPhotoURL // 2. Guardamos la URL de alta resolución
      };

      await setDoc(userDocRef, profileData, { merge: true });
      
      // --- FIN DE LA LÓGICA DE FOTO ---

      this.notyf.success(`Bienvenido ${user.displayName || 'Usuario'}`);
      this.router.navigate(['/']);

    } catch (error: any) {
      this.notyf.error(error.message || 'Error al iniciar sesión con Google');
    }
  }

  async login(email: string, password: string) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      this.notyf.success(`Bienvenido ${user.user.displayName || 'Usuario'}`);
      this.router.navigate(['/']);
    } catch (error: any) {
      if (error.code === 'auth/invalid-email') {
        this.notyf.error('Correo inválido.');
      } else if (error.code === 'auth/user-not-found') {
        this.notyf.error('Usuario no encontrado.');
      } else if (error.code === 'auth/wrong-password') {
        this.notyf.error('Contraseña incorrecta.');
      } else {
        this.notyf.error('Ocurrió un error al iniciar sesión.');
      }
    }
  }

  async register(
    email: string,
    password: string,
    nombre: string = '',
    date: string = '' 
  ) {
    try {
      const result = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      if (nombre) {
        await updateProfile(result.user, { displayName: nombre });
      }

      const fechaFormateada = date ? date : this.formatDate(new Date());

      await this.addDocument('users', {
        uid: result.user.uid,
        email,
        nombre,
        fechaNacimiento: fechaFormateada,
      });

      this.notyf.success('Usuario registrado correctamente');
      this.router.navigate(['/']);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        this.notyf.error(
          'Este correo ya está registrado. Intenta iniciar sesión.'
        );
      } else if (error.code === 'auth/invalid-email') {
        this.notyf.error('Correo inválido.');
      } else if (error.code === 'auth/weak-password') {
        this.notyf.error('La contraseña es demasiado débil.');
      } else {
        this.notyf.error(
          'Ocurrió un error al registrar el usuario. Intenta de nuevo.'
        );
      }
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      this.notyf.success('Sesión cerrada correctamente');
      this.router.navigate(['/login']);
    } catch (error: any) {
      this.notyf.error(error.message || 'Error al cerrar sesión');
    }
  }

  async sendPasswordReset(email: string, continueUrl?: string) {
    try {
      // Opcional: configurar dónde volver después del reset (deep link)
      const actionCodeSettings = continueUrl
        ? {
            url: continueUrl,
            handleCodeInApp: false, // o true si manejas en-app
          }
        : undefined;

      await sendPasswordResetEmail(this.auth, email, actionCodeSettings);
      this.notyf.success(
        'Correo de restablecimiento enviado. Revisa tu bandeja.'
      );
      return true;
    } catch (error: any) {
      // Manejo de errores frecuentes
      if (error.code === 'auth/invalid-email') {
        this.notyf.error('Correo inválido.');
      } else if (error.code === 'auth/user-not-found') {
        // Por seguridad a menudo se dice un mensaje genérico,
        // pero puedes indicar que no existe la cuenta.
        this.notyf.error('No existe una cuenta con ese correo.');
      } else if (error.code === 'auth/too-many-requests') {
        this.notyf.error('Demasiados intentos. Intenta más tarde.');
      } else {
        this.notyf.error('No se pudo enviar el correo. Intenta de nuevo.');
      }
      return false;
    }
  }

  async addDocument(collectionName: string, data: any) {
    const colRef = collection(this.firestore, collectionName);
    return await addDoc(colRef, data);
  }

  async getDocuments(collectionName: string) {
    const colRef = collection(this.firestore, collectionName);
    const snapshot = await getDocs(colRef);
    return snapshot.docs.map((doc) => doc.data());
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
