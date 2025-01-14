import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  registerForm: FormGroup

  constructor(fb: FormBuilder) {
    this.registerForm = fb.group({
      name: ["", Validators.required]
    });
  }
}
