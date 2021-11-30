import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseComponent } from './new-course.component';
import { DurationPipe } from "../../../../pipes/duration.pipe";

describe('NewCourseComponent', () => {
  let component: NewCourseComponent;
  let fixture: ComponentFixture<NewCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NewCourseComponent,
        DurationPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
