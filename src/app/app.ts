import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar.component/navbar.component";
import { Componenteprincipal } from './components/componenteprincipal/componenteprincipal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Componenteprincipal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SS');
}
