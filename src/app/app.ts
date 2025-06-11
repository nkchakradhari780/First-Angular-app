import { Component, twoWayBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Interpolation } from './components/interpolation/interpolation';
import { ClassBinding } from './components/class-binding/class-binding';
import { CommonModule } from '@angular/common';
import { StyleBinding } from './components/style-binding/style-binding';
import { EventBinding } from './components/event-binding/event-binding';
import { TwoWayBinding } from './components/two-way-binding/two-way-binding';
import { DirectiveImplementation } from './components/directive-implementation/directive-implementation';
import { SignupForm } from './components/signup-form/signup-form';
import { ComponentInheritance } from "./components/component-inheritance/component-inheritance";
import { FormsModule } from '@angular/forms';
import { PipeComponents } from './components/pipe-components/pipe-components';
import { ServiceImplementation } from './components/service-implementation/service-implementation';
import { MyService } from './services/my-service';
import { EmployeeList } from './components/employee-list/employee-list';
import { EmployeeDetails } from './components/employee-details/employee-details';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Interpolation,
    ClassBinding,
    CommonModule,
    StyleBinding,
    EventBinding,
    TwoWayBinding,
    DirectiveImplementation,
    SignupForm,
    ComponentInheritance,
    FormsModule,
    PipeComponents,
    ServiceImplementation,
    EmployeeList,
    EmployeeDetails
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [MyService]
})
export class App {
  protected title = 'first-angular-app';
  protected name = "Nitin Chakradhari";
  flex = 'flex-box bg-color';
  message = "parent to child communication";

  childmsg: any;
  receiveMessage($event: any) {
    this.childmsg = $event;
    console.log("Message received from child:", $event);
  }

 
}
