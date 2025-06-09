import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [CommonModule],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css'
})
export class EventBinding {
  click : any;
  inputvar: any;
  product = "Laptop";
  clickButton() {
    this.click = this.inputvar;
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputvar = input.value;
  }

  addToCart(product: any) {
    alert("Item added to cart: " + product);
  }
}
