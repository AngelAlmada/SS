import { Usuario } from './pages/usuario/usuario';
import { Cursos } from './pages/cursos/cursos';
import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { TestGenerateRegisterComponent } from './components/test-generate-register.component/test-generate-register.component';
import { Inicio } from './pages/inicio/inicio';
import { Listacursos } from './components/listacursos/listacursos';

export const routes: Routes = [
  {
    path: '',
    component: Inicio,
  },
  {
    path: 'cursos',
    component: Cursos,
  },{
    path: 'usuario',
    component: Usuario,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'testfirebase',
    component: TestGenerateRegisterComponent,
  },
  {
    path: 'lista',
    component: Listacursos,
  },
];
