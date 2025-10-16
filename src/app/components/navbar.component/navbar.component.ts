import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavItem {
  label: string;
  iconPath: string; // Ruta o URL del icono SVG
  route: string;   // Ruta a la que navega el ítem
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
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
      label: 'Inicio', iconPath: 'iconsnavbar/person.svg', route: '/usuario'
    },
  ]
}
