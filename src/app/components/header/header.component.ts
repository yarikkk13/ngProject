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

  constructor(private authService:AuthService) {
  }

  logOut():void {
    this.authService.logOut();
  }

  ngOnInit(): void {
  }

}
