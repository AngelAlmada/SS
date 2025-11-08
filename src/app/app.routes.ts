// src/app/app.routes.ts
import { Routes } from '@angular/router';

// --- Páginas principales ---
import { Inicio } from './pages/inicio/inicio';
import { Cursos } from './pages/cursos/cursos';
import { DetallesCursos } from './pages/detalles-cursos/detalles-cursos';

// --- Componentes secundarios ---
import { Login } from './components/login/login';
import { Registro } from './components/registro/registro';
import { Listacursos } from './components/listacursos/listacursos';
import { TestGenerateRegisterComponent } from './components/test-generate-register.component/test-generate-register.component';
import { MiPerfilComponent } from './components/miperfil/miperfil';

export const routes: Routes = [
  {
    path: '',
    component: Inicio,
  },
  {
    path: 'cursos',
    component: Cursos,
  },
  {
    path: 'mi-perfil',
    component: MiPerfilComponent,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'registro',
    component: Registro,
  },
  {
    path: 'lista',
    component: Listacursos,
  },
  {
    path: 'testfirebase',
    component: TestGenerateRegisterComponent,
  },
  {
    path: 'registrocurso/:titulo',
    component: DetallesCursos,
  },
  {
    path: '**',
    redirectTo: '', // Redirige a inicio si la ruta no existe
  },
];
