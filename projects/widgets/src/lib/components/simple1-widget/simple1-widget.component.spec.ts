import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Simple1WidgetComponent } from './simple1-widget.component';

describe('Simple1WidgetComponent', () => {
  let component: Simple1WidgetComponent;
  let fixture: ComponentFixture<Simple1WidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Simple1WidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Simple1WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
