import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() { }

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
}
