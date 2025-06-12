import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.css'
})
export class SignupForm {
  fullName = "NkChakradhari";
  email = "nkchakradhari780@gmail.com"
  password = "abcde";
  confirm_pass = "abcde";

  submitButton() {
    console.log("FullName: " + this.fullName)
    console.log("Email: " + this.email)
    console.log("Password: " + this.password)
    console.log("Confirm Pass: " + this.confirm_pass)
  }

  signupModel: any = { };

  onSubmit() {
    alert('Success!! :-) \n\n' + JSON.stringify(this.signupModel))
  }

}
