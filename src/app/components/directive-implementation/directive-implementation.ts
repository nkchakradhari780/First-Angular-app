import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight-directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive-implementation',
  imports: [HighlightDirective,CommonModule],
  templateUrl: './directive-implementation.html',
  styleUrl: './directive-implementation.css'
})
export class DirectiveImplementation {
  isLoggedIn = false;
}
