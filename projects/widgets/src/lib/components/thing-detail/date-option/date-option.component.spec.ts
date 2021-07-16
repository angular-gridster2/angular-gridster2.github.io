import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateOptionComponent } from './date-option.component';

describe('DateOptionComponent', () => {
  let component: DateOptionComponent;
  let fixture: ComponentFixture<DateOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
