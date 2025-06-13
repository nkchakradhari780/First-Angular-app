import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyService } from '../../services/my-service';

@Component({
  selector: 'app-add-product-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product-form.html',
  styleUrl: './add-product-form.css'
})
export class AddProductForm {

  addProductModel: any = {};

  constructor(private myservice: MyService) { }

  data:any;

  onSubmit() {
    if (
      this.addProductModel.title &&
      this.addProductModel.price &&
      this.addProductModel.description &&
      this.addProductModel.category
    ) {
      this.myservice.addProduct(this.addProductModel).subscribe({
        next: (response) => {
          this.data = response;
          alert("product added successfully:"+this.data)
        },
        error: (err) => {
          console.log('error adding data', err);
          alert("failed to add data")
        }
      })
    } else {
      alert("Some data is missing ")
    }
  }


}
