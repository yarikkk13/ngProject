import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseComponent } from './edit-course.component';
import {RouterTestingModule} from "@angular/router/testing";
import {DurationPipe} from "../../../../pipes/duration.pipe";

describe('EditCourseComponent', () => {
  let component: EditCourseComponent;
  let fixture: ComponentFixture<EditCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EditCourseComponent,
        DurationPipe
      ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
