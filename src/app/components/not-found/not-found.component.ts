import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  public notFoundText = '404 error';

  public text = "sorry, your page doesn't exists";

  constructor() { }

  ngOnInit(): void {
  }

}