import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  imports: [CommonModule],
  templateUrl: './style-binding.html',
  styleUrl: './style-binding.css'
})
export class StyleBinding {
   fontSize = 20;
   color = 'blue';
   hasError = true ;
   bgColor = 'pink';
}
