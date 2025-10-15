import { Component, signal } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-test-generate-register.component',
  imports: [],
  templateUrl: './test-generate-register.component.html',
  styleUrl: './test-generate-register.component.css'
})
export class TestGenerateRegisterComponent {
  nameCatalog = signal<string>('');
  contentCatalog = signal<string>('');

  constructor(private firebaseService: FirebaseService) {}

  addData() {
    const newData = {
      nameCatalog: this.nameCatalog(),
      contentCatalog: this.contentCatalog()
    };

    console.log('New Data to be added:', newData);

    try {
      const docRef = this.firebaseService.addDocument('catalogos', newData);
      console.log('Document written with ID: ', docRef);
    }catch (error) {
      console.error('Error adding document: ', error);
    }
  }
}
