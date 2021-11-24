import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionComponent} from './section.component';
import {OrderByPipe} from "../../../../pipes/order-by.pipe";
import {FilterPipe} from "../../../../pipes/filter.pipe";
import {CoursesService} from "../../../../services/courses.service";

describe('SectionComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SectionComponent,
        OrderByPipe,
        FilterPipe,
      ],
      providers: [
        {
          provide: CoursesService, useValue: {
            getCourses: () => {
              return [{id: 1}]
            },
            removeCourses: (): void => {}
          }
        }
      ]
    }).compileComponents();
  });

  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ng On init', () => {
    component.ngOnInit()
    expect(component.courses).toEqual([{id:1} as any])
  });


});
