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
  msg:string = 'hello from component';

  constructor(private myService: MyService){

  }

  
  ngOnInit(){
    this.myService.msgFromComp = this.msg;
    this.msg = this.myService.getMessage();
  }
}
