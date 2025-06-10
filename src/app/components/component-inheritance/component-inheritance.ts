import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-inheritance',
  imports: [],
  templateUrl: './component-inheritance.html',
  styleUrl: './component-inheritance.css'
})

export class ComponentInheritance {

  messagefromchild = "Hello from child component";

  @Input() message!: string;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.messagefromchild);
  }

}
