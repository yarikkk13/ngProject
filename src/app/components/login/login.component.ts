import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(private authServices: AuthService) {
  }

  submitMethod(): void {
    this.authServices.login(this.email, this.password)
    console.log(localStorage.getItem('email'))
    console.log(localStorage.getItem('password'))
    console.log('logged in successfully')
  }

  ngOnInit(): void {
  }

}
