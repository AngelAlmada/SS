import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Esta línea es de tu rama (HEAD)
import { Componenteprincipal } from './components/componenteprincipal/componenteprincipal';
// Esta línea viene de la rama 'develop'
import { NavbarComponent } from "./components/navbar.component/navbar.component";

@Component({
  selector: 'app-root',
  // Aquí combinamos ambos componentes en el arreglo 'imports'
  imports: [RouterOutlet, Componenteprincipal, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SS');
}