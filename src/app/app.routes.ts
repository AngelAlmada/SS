import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { TestGenerateRegisterComponent } from './components/test-generate-register.component/test-generate-register.component';
import { CuadriculaCursos } from './components/cuadricula-cursos/cuadricula-cursos'
export const routes: Routes = [

  {
    path: 'login',
    component: Login
  },
  {
    path: 'cursos',
    component: CuadriculaCursos 
  },
  {
    path: 'testfirebase',
    component: TestGenerateRegisterComponent
  }
];