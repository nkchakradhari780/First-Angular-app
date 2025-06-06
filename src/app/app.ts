import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Interpolation } from './components/interpolation/interpolation';
import { ClassBinding } from './components/class-binding/class-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Interpolation,ClassBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'first-angular-app';
  protected name = "Nitin Chakradhari";
}
