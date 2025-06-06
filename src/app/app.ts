import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Interpolation } from './components/interpolation/interpolation';
import { ClassBinding } from './components/class-binding/class-binding';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Interpolation,ClassBinding,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'first-angular-app';
  protected name = "Nitin Chakradhari";
  flex = 'flex-box bg-color';
}
