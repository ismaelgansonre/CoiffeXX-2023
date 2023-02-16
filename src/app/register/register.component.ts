import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../models/User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    accountType: new FormControl('Client', Validators.required),
    localisation: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  constructor(public service: UsersService) { }

  public register(): void {
    let newUser: User = {
      id: Math.random(),
      username: this.form.value.username,
      email: this.form.value.email,
      passwordHash: this.form.value.password,
      accountType: this.form.value.accountType,
      offers: [],
      reservations: []
    };
  }

}
