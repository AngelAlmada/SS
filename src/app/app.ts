import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componenteprincipal } from './components/componenteprincipal/componenteprincipal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componenteprincipal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SS');
}
