import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gauge2WidgetComponent } from './gauge2-widget.component';

describe('Gauge2WidgetComponent', () => {
  let component: Gauge2WidgetComponent;
  let fixture: ComponentFixture<Gauge2WidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gauge2WidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gauge2WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
