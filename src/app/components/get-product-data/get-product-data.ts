import { Component } from '@angular/core';
import { MyService, Product } from '../../services/my-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-product-data',
  imports: [CommonModule],
  templateUrl: './get-product-data.html',
  styleUrl: './get-product-data.css'
})
export class GetProductData  {

  constructor(private myservice:MyService){}
  product: Product[] = [];

  ngOnInit():void {
    this.myservice.getData().subscribe(data => {
      console.log(data)
      this.product = data;
    })
  }

}
