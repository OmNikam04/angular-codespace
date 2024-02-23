import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      name: ["", Validators.required]
    });
  }
}
