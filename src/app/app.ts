import { Component, twoWayBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Interpolation } from './components/interpolation/interpolation';
import { ClassBinding } from './components/class-binding/class-binding';
import { CommonModule } from '@angular/common';
import { StyleBinding } from './components/style-binding/style-binding';
import { EventBinding } from './components/event-binding/event-binding';
import { TwoWayBinding } from './components/two-way-binding/two-way-binding';
import { DirectiveImplementation } from './components/directive-implementation/directive-implementation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Interpolation, ClassBinding, CommonModule, StyleBinding, EventBinding, TwoWayBinding,DirectiveImplementation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'first-angular-app';
  protected name = "Nitin Chakradhari";
  flex = 'flex-box bg-color';
  
}
