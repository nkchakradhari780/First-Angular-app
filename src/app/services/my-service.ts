import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http:HttpClient) { }

  public msgFromComp: string = '';

  getMessage(): string {
    return 'Hello from MyService!'
  }

  getEmployees(){
    return [
      {"id": 1, "Name": "Nitin","Age":22},
      {"id": 2, "Name": "Nisha","Age":23},
      {"id": 3, "Name": "Nihal","Age":24}
    ]
  }

  getData():Observable<Product[]>
  {
    return this.http.get<Product[]>('http://fakestoreapi.com/products');
  }

  addProduct(data: any){
    return this.http.post<AddProduct>('https://fakestoreapi.com/products',data)
  }
}

export class Rating {
  rate: number | undefined;
  count: number | undefined;
}

export class Product{
  id: number | undefined;
  title: string | undefined;
  price: number | undefined;
  description: string | undefined;
  category: string | undefined;
  image: string | undefined;
  rating: Rating | undefined;
}

export class AddProduct {
  id!: number;
  title1!: string;
  price!: number;
  description!: string;
  category!: string;
  image!: string;
}