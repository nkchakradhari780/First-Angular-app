import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight-directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-implementation',
  imports: [HighlightDirective,CommonModule, FormsModule],
  templateUrl: './directive-implementation.html',
  styleUrl: './directive-implementation.css'
})
export class DirectiveImplementation {
  isLoggedIn = false;
  selectedColor = 'red';  

  fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
}
