import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gauge1WidgetComponent } from './gauge1-widget.component';

describe('Gauge1WidgetComponent', () => {
  let component: Gauge1WidgetComponent;
  let fixture: ComponentFixture<Gauge1WidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gauge1WidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gauge1WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
