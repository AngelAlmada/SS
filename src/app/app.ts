import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { Componenteprincipal } from './components/componenteprincipal/componenteprincipal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componenteprincipal],
=======
import { NavbarComponent } from "./components/navbar.component/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
>>>>>>> develop
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SS');
}
