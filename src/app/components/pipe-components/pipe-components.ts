import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TruncateCustomPipe } from '../../pipes/truncate-custom-pipe';

@Component({
  selector: 'app-pipe-components',
  imports: [CommonModule,TruncateCustomPipe],
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
  public title = "Hello"
  public date = new Date();
}
