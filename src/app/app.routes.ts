import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { TestGenerateRegisterComponent } from './components/test-generate-register.component/test-generate-register.component';

export const routes: Routes = [

  {
    path: 'login',
    component: Login
  },
  {
    path: 'testfirebase',
    component: TestGenerateRegisterComponent
  }
];
