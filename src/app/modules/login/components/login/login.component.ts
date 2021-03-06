import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AuthService } from "../../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  public loginWord: string = 'Login';
  public forgotWord: string = 'Forgot password?';

  constructor(private authServices: AuthService) {
  }

  submitMethod(): void {
    this.authServices.login2(this.email, this.password)
    console.log('logged in successfully')
  }

  ngOnInit(): void {
  }

}
