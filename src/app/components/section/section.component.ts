import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  search = 'Search';

  add = 'Add course';

  load = 'LOAD MORE';

  constructor() {
  }

  ngOnInit(): void {
  }

}
