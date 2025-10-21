import { Usuario } from './pages/usuario/usuario';
import { Cursos } from './pages/cursos/cursos';
import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { TestGenerateRegisterComponent } from './components/test-generate-register.component/test-generate-register.component';
import { CuadriculaCursos } from './components/cuadricula-cursos/cuadricula-cursos'

import { Inicio } from './pages/inicio/inicio';
import { Listacursos } from './components/listacursos/listacursos';
import { Registro } from './components/registro/registro';

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
    path: 'cursos',
    component: CuadriculaCursos 
  },
  {
    path: 'testfirebase',
    component: TestGenerateRegisterComponent
  },
  
  {
    path: 'lista',
    component: Listacursos,
  },
  {
    path: 'registro',
    component: Registro,
  },
];