import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-component-inheritance',
  imports: [CommonModule],
  templateUrl: './component-inheritance.html',
  styleUrl: './component-inheritance.css'
})

export class ComponentInheritance implements OnChanges,OnInit,AfterViewInit{

  @ViewChild('inputRef') inputElement!: ElementRef;
  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    this.inputElement.nativeElement.focus();
  }

  users: any[] = []

  ngOnInit(): void {
    console.log('ngOnInit - component initialized')
    this.loadData();

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - message changed: ', changes['message '])
  }

  loadData(): void {
    this.users = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Alice Johnson', email: 'alice@example.com' }
    ];
  }

  messagefromchild = "Hello from child component";

  @Input() message!: string;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.messagefromchild);
  }

}
  