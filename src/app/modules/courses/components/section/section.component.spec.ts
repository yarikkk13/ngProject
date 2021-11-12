import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComponent } from './section.component';
import { OrderByPipe } from "../../../../pipes/order-by.pipe";
import { FilterPipe } from "../../../../pipes/filter.pipe";

describe('SectionComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SectionComponent,
        OrderByPipe,
        FilterPipe
      ],
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
});
