import { Component } from '@angular/core';
import { MyService } from '../../services/my-service';

@Component({
  selector: 'app-service-implementation',
  imports: [],
  templateUrl: './service-implementation.html',
  styleUrl: './service-implementation.css',
  providers: [MyService]
})

export class ServiceImplementation {
  msg:any;

  constructor(private myService: MyService){

  }

  ngOnInit(){
    this.msg = this.myService.getMessage();
  }
}
