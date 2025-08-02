import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/Nav/nav';
import { Footer } from './components/Footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('App-1');
}