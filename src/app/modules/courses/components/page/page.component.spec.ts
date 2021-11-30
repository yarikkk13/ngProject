import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageComponent} from './page.component';

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('check delete', () => {
    component.course = {
      id: 1,
    } as any;
    spyOn(component.eventOfDeleting, "emit")
    component.deleteEvent()
    expect(component.eventOfDeleting.emit).toHaveBeenCalledWith(1)
  })

    it('check edit', () => {
    component.course = {
      id: 1,
    } as any;
    spyOn(component.eventOfEditing, "emit")
    component.editEvent()
    expect(component.eventOfEditing.emit).toHaveBeenCalledWith(1)
  })

});
