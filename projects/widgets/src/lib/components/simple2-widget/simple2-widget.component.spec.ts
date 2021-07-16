import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Simple2WidgetComponent } from './simple2-widget.component';

describe('Simple2WidgetComponent', () => {
  let component: Simple2WidgetComponent;
  let fixture: ComponentFixture<Simple2WidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Simple2WidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Simple2WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
