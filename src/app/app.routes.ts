import { Routes } from '@angular/router';

// --- Importaciones de tus páginas y componentes ---
import { Inicio } from './pages/inicio/inicio';
import { Cursos } from './pages/cursos/cursos';
import { Login } from './components/login/login';
import { Registro } from './components/registro/registro';
import { Listacursos } from './components/listacursos/listacursos';
import { TestGenerateRegisterComponent } from './components/test-generate-register.component/test-generate-register.component';

// ¡IMPORTANTE! CORREGIDA LA RUTA DE IMPORTACIÓN (con guion)
import { MiPerfilComponent } from './components/miperfil/miperfil';
import { DetallesCursos } from './pages/detalles-cursos/detalles-cursos';

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
    // ¡CORREGIDO! AÑADIDO EL GUION
    path: 'mi-perfil',
    component: MiPerfilComponent, // Apunta al componente que creamos
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
    component: DetallesCursos
  }
];
