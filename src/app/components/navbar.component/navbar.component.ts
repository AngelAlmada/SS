import { Component } from '@angular/core';
// 1. IMPORTA CommonModule y RouterLinkActive
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  iconPath: string; // Ruta o URL del icono SVG
  route: string;   // Ruta a la que navega el ítem
}

@Component({
  selector: 'app-navbar',
  // 2. AÑÁDELOS a los imports
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navItems: NavItem[] = [
    {
      label: 'Inicio', iconPath: 'iconsnavbar/home.svg', route: '/'
    },
    {
      label: 'Cursos', iconPath: 'iconsnavbar/curso.svg', route: '/cursos'
    },{
      // 3. CORRIGE la ruta para que coincida con app.routes.ts
      label: 'Mi Perfil', iconPath: 'iconsnavbar/person.svg', route: '/mi-perfil'
    },
  ]
}