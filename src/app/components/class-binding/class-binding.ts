import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  imports: [CommonModule],
  templateUrl: './class-binding.html',
  styleUrl: './class-binding.css'
})
export class ClassBinding {
  protected title = 'Class Binding Example';
  currentClass = 'text-blue bg-yellow';
  isActive = true;
  isHighlited = true;
  isError = false;
}
