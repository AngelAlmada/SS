import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { addDoc, collection, Firestore, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-firebase',
  imports: [],
  templateUrl: './firebase.html',
  styleUrl: './firebase.css'
})
export class Firebase {
  constructor(private auth: Auth, private firestore: Firestore) {}

  async login (email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async register (email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async logout () {
    return await signOut(this.auth);
  }

  async addDocument(collectionName: string, data: any) {
    const colRef = collection(this.firestore, collectionName);
    return await addDoc(colRef, data);
  }

  async getDocuments(collectionName: string) {
    const colRef = collection(this.firestore, collectionName);
    const snapshot = await getDocs(colRef);
    return snapshot.docs.map(doc => doc.data);
  }
}
