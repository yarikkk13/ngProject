import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  videoCurse = 'VIDEO COURSE';

  userLogin = 'User login';

  logOff = 'Log off';

  ngOnInit(): void {
  }

}
