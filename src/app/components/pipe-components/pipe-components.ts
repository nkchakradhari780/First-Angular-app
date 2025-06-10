import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-components',
  imports: [CommonModule],
  templateUrl: './pipe-components.html',
  styleUrls: ['./pipe-components.css']
})
export class PipeComponents {
  public name = "NkChakradhari";
  public message = "Welcome to angular pipes";
  public person = {
    firstname: "Nk",
    lastname: "Chakradhari",
  };
  public date = new Date();
}
