import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public videoCurse: string = 'VIDEO COURSE';

  public userLogin: string = 'User login';

  public logOff: string = 'Log off';

  public user?: any;

  constructor(private authService: AuthService) {

    authService.getUserInfo().subscribe((value:any) => this.user = value)
    console.log(this.user)
  }

  logOut(): void {
    this.authService.logOut();
  }

  ngOnInit(): void {

  }

}
